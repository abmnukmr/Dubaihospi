import { Component } from '@angular/core';
import {ModalController, NavController, PopoverController} from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {OnestepupPage} from "../onestepup/onestepup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
   this.navCtrl.push(OnestepupPage)
  }
}
