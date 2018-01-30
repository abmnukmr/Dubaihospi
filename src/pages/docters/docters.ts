import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Http, RequestOptions,Headers} from "@angular/http";
import {BookingProvider} from "../../providers/booking/booking";
import {DoctordatasearchProvider} from "../../providers/doctordatasearch/doctordatasearch";
import * as firebase from "firebase/app";
import {DatePicker} from "@ionic-native/date-picker";
import {EmailComposer} from "@ionic-native/email-composer";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-docters',
  templateUrl: 'docters.html',
})
export class DoctersPage {

  email1:any;
  de:boolean;
  bookingdata:any;
  bookingdataa:any;
  update:any;
  updatee:any;
  docterdata:any;
  Specialize:any;
  username:any;
   timeslot:any=[];
   time:any;
  loading:any;
  d_name:any="";
  d_email:any="";
  d_number:any="";
  d_service:any="";
  d_location:any="";
  d_about:any="";
  name:any="";
  email:any="";
  items:any=[];
  constructor(public http:Http,public loadingCtrl:LoadingController,public docterr:DoctordatasearchProvider,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams,private datePicker: DatePicker) {

    this.loading = this.loadingCtrl.create({
      content:"Wait..."
    });


    this.items = [
      "General physician",

      "ENT(Eye, nose ,throat)",

      "Dermatologist",

      "Dentist",

      "Diabetes",

      "Ophthalmology",

      "Hair fall",

      "Pediatrics",

      "Sexologist",

      "Depression",

      "Pregnancy",

      "Gynaecology & obstetrics",

      "Infertility",

      "Nutritionist /Dietitian",

      "Gastroenterology",

      "Cardiologist",

      "Nephrology",

      "Neurologist",

      "allergist",

      "Geriatrics",

      "Podiatry",

      "Herpetologist",

      "Haematologist",

      "Immunologist",

      "Oncologist",

      "Orthologist",

      "Psychologist",

      "Psychiatrist",

      "Anaesthesiologists",

      "Urologist",

      "Radiologist",

      "Surgeon",

      "Plastic surgeon",

      "Radiologist"

    ];


  }

  skp(){
    this.navCtrl.push(TabsPage);
  }


  additrm(){
    this.timeslot.push({"time":this.time});
    this.time="";
  }

  deltime(i){
    this.timeslot.splice(i,1)
  }



  ionViewDidEnter() {
   this.loading.present()

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {
    }


    this.docterr.getdata(this.email1).then((data)=>{
      this.docterdata=data;
      console.log(data)
      this.bookingdata=this.docterdata.bookings
      this.d_name=this.docterdata.name;
      this.d_number=this.docterdata.phone;
      this.d_about=this.docterdata.about;
      this.d_service=this.docterdata.services;
      this.d_location=this.docterdata.Location
      this.Specialize=this.docterdata.doctor_type

      this.timeslot=this.docterdata.slots

        this.loading.dismiss()
      this.loading.dismissAll()


      if(this.d_name!=""){
        this.de=true;
      }else {
        this.de=false;
      }

    })
    console.log("checkin")



  }



  doRefresh(refresher) {
    console.log('Begin async operation', refresher);


    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;


      this.docterr.getdata(this.email1).then((data)=>{
        this.docterdata=data;
        console.log(data)
        this.bookingdata=this.docterdata.bookings
        this.d_name=this.docterdata.name;
        this.d_number=this.docterdata.phone;
        this.d_about=this.docterdata.about;
        this.d_service=this.docterdata.services;
        this.d_location=this.docterdata.Location
        this.Specialize=this.docterdata.doctor_type
        this.timeslot=this.docterdata.slots

      })

      // this.pet='about'
      console.log("checkin")
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

    }
    else {
    }


    this.docterr.getdata(this.email1).then((data)=>{
      this.docterdata=data;
      this.d_name=this.docterdata.name;
      this.d_number=this.docterdata.phone;
      this.d_about=this.docterdata.about;
      this.d_service=this.docterdata.services;
      this.d_location=this.docterdata.Location
      this.Specialize=this.docterdata.doctor_type

      this.timeslot=this.docterdata.slots


    })
    console.log("checkin")
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {

    }


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


  addtodoc() {

    if (this.d_name != "" && this.d_number != "" && this.d_about != "" && this.d_service != "" && this.Specialize != "" && this.d_location != "" && this.timeslot != []) {

      this.loading.present();

      var user = firebase.auth().currentUser;
      if (user != null) {
        this.email1 = user.email;

      }
      else {
      }


      this.updatee = {
        "email": this.email1,
        "phone": this.d_number,
        "name": this.d_name,
        "about": this.d_about,
        "services": this.d_service,
        "doctor_type": this.Specialize,
        "Location": this.d_location,
        "slots": this.timeslot

        // "doctor_type": req.body.doctor_type,

      }

      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/add/admin/docter', JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'
          alert("Added to doctor list")
          this.navCtrl.setRoot(TabsPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      this.loading.dismiss();
      //  this.Dismiss();


    } else {
      alert("Fill all details")
    }

  }






}
