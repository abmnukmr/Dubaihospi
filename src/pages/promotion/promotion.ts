import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {MenuPage} from "../menu/menu";
import {Promo2Page} from "../promo2/promo2";
import {PromodtasearchProvider} from "../../providers/promodtasearch/promodtasearch";

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

  promodata:any=[];
  items:any;
  filtter:any;
  title:any;
  myInput:any="";
  constructor(public rot:PromodtasearchProvider,public navCtrl: NavController,public popoverCtrl: PopoverController, private mdl:ModalController) {

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
  ionViewDidEnter(){
    this.laoddata();
  }

  laoddata(){
  this.rot.getdata().then((data)=>{
    this.promodata=data;
  })
}


  gotochat(em){
    this.navCtrl.push(Promo2Page,{"email":em});
  }

  initializeItems(){

    this.items=this.promodata;

  }

  getItems(ev) {
    //  this.searching = true;
    // Reset items back to all of the items
    this.initializeItems();
    //this.listshow=true;
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items



    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        this.filtter=this.title;
        console.log(this.filtter);
        return (item.catagory.toLowerCase().indexOf(val.toLowerCase()) > -1);


      })
    }




  }


}
