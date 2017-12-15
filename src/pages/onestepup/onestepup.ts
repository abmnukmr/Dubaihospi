import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import {EmailComposer} from "@ionic-native/email-composer";
import * as firebase from "firebase/app";
import {SettingsPage} from "../settings/settings";

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
  constructor(private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams,private datePicker: DatePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnestepupPage');
  }

  ionViewDidEnter() {
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



    //this.load();
  }


  changetab(){
    this.pet='services'

  }
  showdate(){

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


      alert(date)
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


}
