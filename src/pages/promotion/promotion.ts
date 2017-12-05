import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {MenuPage} from "../menu/menu";
import {Promo2Page} from "../promo2/promo2";

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController, private mdl:ModalController) {

  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuPage);
    popover.present({
      ev: myEvent
    });
  }


  modal(){
    let md=this.mdl.create(AdwancesearchPage)
    md.present()
  }


  gotochat(){
    this.navCtrl.push(Promo2Page);
  }

}
