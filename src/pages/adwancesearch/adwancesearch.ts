import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AdwancesearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adwancesearch',
  templateUrl: 'adwancesearch.html',
})
export class AdwancesearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private Vctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdwancesearchPage');
  }
  cv(){
    this.Vctrl.dismiss()
  }

}
