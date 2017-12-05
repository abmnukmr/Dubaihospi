import { Component } from '@angular/core';
import {ModalController, NavController, PopoverController} from 'ionic-angular';
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {MenuPage} from "../menu/menu";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

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


}
