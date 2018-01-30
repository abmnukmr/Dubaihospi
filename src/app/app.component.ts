import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import * as firebase from "firebase/app";

import { TabsPage } from '../pages/tabs/tabs';
import {RegisterPage} from "../pages/register/register";
import {BookingProvider} from "../providers/booking/booking";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;
 email1:any;
  bookingdata:any;
  name:any;
  constructor(public bokk:BookingProvider,private storage: Storage,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

/*
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.rootPage= TabsPage;

        var name = user.displayName;
        this.email1 = user.email;
        var photoUrl = user.photoURL;
      }else {

        this.rootPage= RegisterPage;

      }



  */

      storage.get('name').then((val) => {
        console.log('Your age is', val);
        if(val=='logged')
        {
          this.rootPage= TabsPage;
        }
        else
        {
         // this.rootPage= RegisterPage;
          this.rootPage= RegisterPage;
        }
      });





      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
