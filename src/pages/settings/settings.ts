import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
//import * as firebase from "firebase";
//import {AuthProvider} from "../../providers/auth/auth";
import { GooglePlus } from '@ionic-native/google-plus';

//import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
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
  photoUrl:any;
 auth:boolean=true;
  fireauth = firebase.auth();

  constructor(public googleplus: GooglePlus,public navCtrl: NavController, public navParams: NavParams,private Vctrl:ViewController) {


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


  googleauth() {
    this.googleplus.login({
      'webClientId':'574781895288-7tjv2uffn6j06hl87ljrjeeh7jedvo99.apps.googleusercontent.com',
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        this.fireauth.signInWithCredential(firecreds).then((res) => {
          // this.navCtrl.setRoot(HomePage);
          this.auth=true;
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

}
