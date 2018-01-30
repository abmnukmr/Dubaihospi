import { Component } from '@angular/core';
import {
  LoadingController, ModalController, NavController, NavParams, PopoverController,
  ViewController
} from 'ionic-angular';
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {MenuPage} from "../menu/menu";
import {BookingProvider} from "../../providers/booking/booking";
import * as firebase from "firebase/app";
import {Http, RequestOptions,Headers} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  bookingdata:any;
  email1:any;
  update:any;
  bookingdataa:any;
  username:any;
  loading:any;
  constructor(public http:Http,public loadingCtrl:LoadingController,public bokk:BookingProvider,public navCtrl: NavController, public navParams: NavParams,private Vctrl:ViewController) {

    this.loading = this.loadingCtrl.create({
      content:"Wait..."
    });

  }

  ionViewDidEnter() {

   console.log("checkin")

     var user = firebase.auth().currentUser;
    if (user != null) {
    this.email1 = user.email;
    // this.auth=true;


    this.bokk.getdata(this.email1).then((data) => {
      this.bookingdata = data;
      this.bookingdataa = this.bookingdata.favourite;
      console.log(this.bookingdataa)
    })
    // this.pet='about'
    //console.log("checkin")
    }


  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);


    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;
      this.bokk.getdata(this.email1).then((data) => {
        this.bookingdata = data;
        this.bookingdataa = this.bookingdata.favourite;
        console.log(this.bookingdataa)
      })

    }
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ref(){

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;


      this.bokk.getdata(this.email1).then((data) => {
        this.bookingdata = data;
        this.bookingdataa = this.bookingdata.favourite;
        console.log(this.bookingdataa)
      })
      // this.pet='about'
      console.log("checkin")
    }
  }



  delete(order){

    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      //  this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {



      "fav_id": order,

    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({headers:headers});
    this.http.post('https://mavaeed.herokuapp.com/delete/favourite/' +this.email1, JSON.stringify(this.update),options)
      .subscribe(data => {
        console.log(data)
        this.ref()
        this.loading.dismissAll();
        //this.Dismiss();
        // this.pet='about'
        alert("Deleted Succesfully")
        //this.navCtrl.push(WalletPage);
      }, err => {
        console.log("Error!:", err.json());
        this.loading.dismiss();
      });

    this.loading.dismiss();
    //  this.Dismiss();

  }



}
