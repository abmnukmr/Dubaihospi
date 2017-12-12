import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  pet:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnestepupPage');
  }

  ionViewDidEnter() {
    this.pet='about'
    console.log("checkin")

    //this.load();
  }
}
