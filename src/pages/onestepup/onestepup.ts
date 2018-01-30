import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import {EmailComposer} from "@ionic-native/email-composer";
import * as firebase from "firebase/app";
import {SettingsPage} from "../settings/settings";
import {DoctordatasearchProvider} from "../../providers/doctordatasearch/doctordatasearch";
import {Http, RequestOptions,Headers} from "@angular/http";
//import {HttpClient, HttpHeaders} from "@angular/common/http";

/**
 * Generated class for the OnestepupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-onestepup',
  templateUrl: 'onestepup.html',
})
export class OnestepupPage {
 email1:any;
  pet:any;
  updatee:any;
  getmail:any;
  docterdata:any;
  username:any;
  loading:any;
  update:any;
  drt:boolean=true;
  constructor(public alertCtrl:AlertController,public http:Http,public loadingCtrl:LoadingController,public docterr:DoctordatasearchProvider,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams,private datePicker: DatePicker) {

    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });


  }



  addreivew(abt){
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

      this.updatee = {
        "email":this.docterdata.email,
        "name": this.username,
        "about": abt,
        "title": abt
      }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/add/review/docter/'+this.email1, JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'
        //  alert(" Review")
          this.lofi();
          this.pet="reviews";
          //this.navCtrl.push(WalletPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      //this.loading.dismiss();
      //  this.Dismiss();


  }


  showCheckbox() {
    let prompt = this.alertCtrl.create({
      message: "Add review",
      inputs: [
        {
          name: 'name',
          placeholder: 'Type here',
        }


      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Post',
          handler: data => {
             this. addreivew(data.name)
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OnestepupPage');
  }

  ionViewDidEnter() {
  this.getmail=this.navParams.get("email")
       console.log(this.getmail);

    this.docterr.getdata(this.getmail).then((data)=>{
      this.docterdata=data;
      console.log(this.docterdata);
    })
    this.pet='about'
    console.log("checkin")
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.email1 = user.email;
       // this.auth=true;

      }
      else {
        //alert("Not detect any user");
        //this.goback();
       // this.auth=false;
      }


  }




  lofi(){

    this.getmail=this.navParams.get("email")
    console.log(this.getmail);

    this.docterr.getdata(this.getmail).then((data)=>{
      this.docterdata=data;
      console.log(this.docterdata);
    })
    this.pet='about'
    console.log("checkin")
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;

    }
    else {
      //alert("Not detect any user");
      //this.goback();
      // this.auth=false;
    }
  }


  book(){

  }


  loaddata(){

  }

  changetab(){
    this.pet='services'

  }
  showdate(time ){

//    this.updatedata("hjgjhg","khgkgkjgkg")


    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;



    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      allowOldDates:false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date =>{ console.log('Got date: ', date)
        this.updatedata(time,date)

          // alert(date)
      },
      err => console.log('Error occurred while getting date: ', err)
    );
    }
    else {
      //alert("Not detect any user");
      //this.goback();
      // this.auth=false;

      this.navCtrl.push(SettingsPage);
    }


  }



  prepairmail(){
    let email = {
      to: 'developer.abmnu@gmail.com',
      cc: 'abmnukmr@gmail.com',
      bcc: ['developer.abmnu@gmail.com', 'abmnukmr@gmail.com'],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  sendmail(){
     this.emailComposer.isAvailable().then((available: boolean) =>{
       if(available) {
        this.prepairmail()
        //Now we know we can send
       }
    });

  }


  bookticket(){

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;
    }
    else {
       this.navCtrl.push(SettingsPage);
      //alert("Not detect any user");
      //this.goback();
      // this.auth=false;
    }

  }


  showp(){
   this.drt=false;
  }

  showpp(){
    this.drt=true;
  }
  updatedata(time,date) {
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {


      "user_name": this.username,
      "docter_name":this.docterdata.name,
      "docter_email":this.getmail,
      "user_email": this.email1,
      "user_phone": "xxxxxxx",
      "user_decription":"xxxxxxxxx",
      "timeslot": time,
      "booking_date":date

    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
   var options = new RequestOptions({headers:headers});

    this.http.post('https://mavaeed.herokuapp.com/book/' + this.email1, JSON.stringify(this.update),options)
      .subscribe(data => {
      console.log(data)

      this.loading.dismissAll();
      //this.Dismiss();
        this.pet='about'
        alert("Your Appointment is booked.")
      //this.navCtrl.push(WalletPage);
    }, err => {
      console.log("Error!:", err.json());
      this.loading.dismiss();
    });

    this.loading.dismiss();
  //  this.Dismiss();

  }



  addtofav(doc_name,doc_em,descrip){

    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;


      this.updatee = {

        "user_name": this.username,
        "docter_name": doc_name,
        "docter_email": doc_em,
        "user_email": this.email1,
        "user_phone": "XXXXXXX",
        "user_decription": descrip
      }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/favourite/' + this.email1, JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'
          alert("Added to favourite")
          //this.navCtrl.push(WalletPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      this.loading.dismiss();
      //  this.Dismiss();

    }else {
      this.navCtrl.setRoot(SettingsPage);
    }
  }



}
