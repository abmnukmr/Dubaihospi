import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {BookingProvider} from "../../providers/booking/booking";
import {Http, RequestOptions,Headers} from "@angular/http";
import * as firebase from "firebase/app";
import {Storage} from "@ionic/storage";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the MybookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mybooking',
  templateUrl: 'mybooking.html',
})
export class MybookingPage {

  email1:any;
  bookingdata:any;
  bookingdataa:any;
  update:any;
  updatee:any;

  username:any;

  loading:any;
   nt:boolean=true;
   ty:boolean=true;

  name:any;
  age:any;
  bg:any;
  phone:any;
  sex:any;
  constructor(public storage:Storage,public http:Http,public loadingCtrl:LoadingController,public bokk:BookingProvider,public navCtrl: NavController, public navParams: NavParams,private Vctrl:ViewController) {

    this.loading = this.loadingCtrl.create({
      content:"Wait..."
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybookingPage');
  }
  close(){
    this.Vctrl.dismiss()
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);


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
      })
      // this.pet='about'
      console.log("checkin")
    }else {

    }
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



  edit(){
    this.nt=false;
    this.ty=false;
  }



  ref(){


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
    })
    // this.pet='about'
    console.log("checkin")
    }
    else {

    }
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
      })
      // this.pet='about'
      console.log("checkin")
    }


  }



  logout(){
    this.storage.set('name', '');
    this.navCtrl.setRoot(RegisterPage)

  }


  delete(order,doc){

      this.loading.present();
      var user = firebase.auth().currentUser;
      if (user != null) {
      //  this.username = user.displayName;
        this.email1 = user.email;
        var photoUrl = user.photoURL;
      }

        this.update = {
          "docter_email": doc,
          "orderid": order,
        }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers:headers});

      this.http.post('https://mavaeed.herokuapp.com/delete/' + this.email1, JSON.stringify(this.update),options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
         // this.pet='about'
          this.ref()
          alert("Your Appointment is Cancelled.")
          //this.navCtrl.push(WalletPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      this.loading.dismiss();
      //  this.Dismiss();

    }








    updateuser(){




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

          this.http.post('https://mavaeed.herokuapp.com/edit/user/' + this.email1, JSON.stringify(this.updatee),options)
            .subscribe(data => {
              console.log(data)

              this.loading.dismissAll();
              //this.Dismiss();
              this.ref()
              this.nt=true;

              alert("Profile Updated ")
              //this.storage.set('name', 'logged');

             // this.navCtrl.setRoot(DoctersPage);
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
