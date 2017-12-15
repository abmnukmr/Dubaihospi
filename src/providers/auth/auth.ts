import {Component, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import * as  AngularFire  from 'angularfire2';
//import firebase from 'firebase';
import * as firebase from "firebase/app";

@Injectable()
export class AuthProvider {


  fireauth = firebase.auth();
  constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  googleauth() {
    this.googleplus.login({
      'webClientId':'574781895288-7tjv2uffn6j06hl87ljrjeeh7jedvo99.apps.googleusercontent.com',
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        this.fireauth.signInWithCredential(firecreds).then((res) => {
         // this.navCtrl.setRoot(HomePage);
        }).catch((err) => {
          alert('Firebase auth failed' + err);
        })

      }).catch((err) => {
      alert('Error' + err);
    })
  }




}
