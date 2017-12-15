import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the MybookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mybooking',
  templateUrl: 'mybooking.html',
})
export class MybookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private Vctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybookingPage');
  }
  close(){
    this.Vctrl.dismiss()
  }

}
