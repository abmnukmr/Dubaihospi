import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Promo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-promo2',
  templateUrl: 'promo2.html',
})
export class Promo2Page {
pet:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Promo2Page');
  }
  ionViewDidEnter() {
    this.pet='about'
    console.log("checkin")

    //this.load();
  }

}
