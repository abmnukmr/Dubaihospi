import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {GooglePlus} from "@ionic-native/google-plus";
import * as firebase from 'firebase';
import {TabsPage} from "../tabs/tabs";
import {AdduserPage} from "../adduser/adduser";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email1:any;
  name:any;
  username:any;
  update:any;
  photoUrl:any;
  auth:boolean=true;
  fireauth = firebase.auth();
  loading:any;
  shoff:boolean=false;
  constructor(public googleplus: GooglePlus,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
         // this.updatedata()
          var user = firebase.auth().currentUser;
          if (user != null) {
            this.email1 = user.email;
            this.auth=true;
            this.name=user.displayName;
            this.photoUrl = user.photoURL;
            this.navCtrl.setRoot(AdduserPage);
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

  gotodumy(){
    this.navCtrl.push(AdduserPage);
  }


}
