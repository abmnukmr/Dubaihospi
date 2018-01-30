import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
//import * as firebase from "firebase";
//import {AuthProvider} from "../../providers/auth/auth";
import { GooglePlus } from '@ionic-native/google-plus';

//import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
import {Http, RequestOptions,Headers} from "@angular/http";
import {OnestepupPage} from "../onestepup/onestepup";
import {AdddoctorPage} from "../adddoctor/adddoctor";
import {DoctersPage} from "../docters/docters";
import {DoctordatasearchProvider} from "../../providers/doctordatasearch/doctordatasearch";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
 email1:any;
 name:any;
 username:any;
 update:any;
  photoUrl:any;
 auth:boolean=true;
  fireauth = firebase.auth();
 loading:any;
 shoff:boolean=false;
  constructor(public docterr:DoctordatasearchProvider,public http:Http,public loadingCtrl:LoadingController,public googleplus: GooglePlus,public navCtrl: NavController, public navParams: NavParams,private Vctrl:ViewController) {

    this.loading = this.loadingCtrl.create({
      content:"Saving..."
    });


  }

  ionViewDidEnter() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      this.auth=true;
      this.name=user.displayName;
      this.photoUrl = user.photoURL;
    }
    else {
      //alert("Not detect any user");
      //this.goback();
      this.auth=false;
    }

  }
    ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  gotodoctor(){
    this.navCtrl.push(AdddoctorPage)
  }


  doctercheck(){
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {
    }


    this.docterr.getdata("abmnukmr@gmail.com").then((data)=>{
      if(data!=null){
       this.shoff=false
      }
      else {
        this.shoff=true;
      }


    }).catch((err)=>{
      this.shoff=true;

    })

  }









  googleauth() {
    this.googleplus.login({
      'webClientId':'574781895288-7tjv2uffn6j06hl87ljrjeeh7jedvo99.apps.googleusercontent.com',
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        this.fireauth.signInWithCredential(firecreds).then((res) => {
          // this.navCtrl.setRoot(HomePage);
          this.auth=true;
          this.updatedata()
          var user = firebase.auth().currentUser;
          if (user != null) {
            this.email1 = user.email;
            this.auth=true;
            this.name=user.displayName;
            this.photoUrl = user.photoURL;
          }
          else {
            //alert("Not detect any user");
            //this.goback();
            this.auth=false;
          }

        }).catch((err) => {
          alert('Firebase auth failed' + err);
        })

      }).catch((err) => {
      alert('Error' + err);
    })
  }

  close(){
    this.Vctrl.dismiss()
  }





  updatedata() {
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {


      "name": this.username,

    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({headers:headers});

    this.http.post('https://mavaeed.herokuapp.com/add/user/' + this.email1, JSON.stringify(this.update),options)
      .subscribe(data => {
        console.log(data)

        this.loading.dismissAll();
        //this.Dismiss();
        alert("")
        this.navCtrl.pop();
      }, err => {
        console.log("Error!:", err.json());
        this.loading.dismiss();
      });

    this.loading.dismiss();
    //  this.Dismiss();

  }



  addDocter(){
    this.navCtrl.push(AdddoctorPage)
  }


  gototodoctorprof(){
    this.navCtrl.push(DoctersPage)
  }

}
