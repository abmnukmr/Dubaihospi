import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PromodtaProvider} from "../../providers/promodta/promodta";

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
geten:any;
promodat:any=[];
  constructor(public dbr:PromodtaProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Promo2Page');
  }
  ionViewDidEnter() {

    this.pet='about'
    this.geten=this.navParams.get("email");
    console.log(this.geten);
    console.log("checkin")
    this.dbr.getdata(this.geten).then((data)=>{
      this.promodat=data;
      console.log(this.promodat);

    })


    //this.load();
  }



  load(){

  }
}
