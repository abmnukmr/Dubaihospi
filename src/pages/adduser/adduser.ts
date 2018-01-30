import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {DoctersPage} from "../docters/docters";
import { Storage } from '@ionic/storage';
import {RequestOptions,Headers,Http} from "@angular/http";
import * as firebase from "firebase/app";
import {BookingProvider} from "../../providers/booking/booking";


/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {



  name:any="";
  age:any;
  bg:any;
  bookingdata:any;
  bookingdataa:any;

  phone:any;
  updatee:any;
  loading:any;
  sex:any;
  email1:any;
  skp:boolean=false;


  constructor(public bokk:BookingProvider,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public http:Http) {


    this.loading = this.loadingCtrl.create({
      content:"wait..."
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
        this.name=this.bookingdata.name;
        this.age=this.bookingdata.age;
        this.sex=this.bookingdata.sex;
        this.bg=this.bookingdata.bg;
        this.phone=this.bookingdata.phone;
        this.bookingdataa = this.bookingdata.bookings;
        console.log(this.bookingdataa)
        if(this.name!=""){
          this.skp=true;
        }else {
          this.skp=false;
        }


      })
      // this.pet='about'
      console.log("checkin")
    }


  }



  vf(){
    this.navCtrl.setRoot(DoctersPage);
    this.storage.set('name', 'logged');

  }




  addtodoc( ){

    if(this.name.trim().length!=0&&this.sex.trim().length!=0 &&this.age.trim().length!=0&&this.phone.trim().length!=0) {
      this.loading.present();


      this.loading.present();
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.name = user.displayName;
        this.email1 = user.email;
        var photoUrl = user.photoURL;
      }


      this.updatee = {

        "name": this.name,
        "phone": this.phone,
        "age": this.age,
        "sex": this.sex,
        "bg": this.bg,
        "email": this.email1,

      }

        // "doctor_type": req.body.doctor_type,


      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/add/user/' + this.email1, JSON.stringify(this.updatee),options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          alert("")
         this.storage.set('name', 'logged');

          this.navCtrl.setRoot(DoctersPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });


    }
    else {

      alert("Fill all input Properly ")

    }
  }


}

