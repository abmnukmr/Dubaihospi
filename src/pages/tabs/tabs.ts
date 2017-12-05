import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PromotionPage} from "../promotion/promotion";
import {NavController, NavParams, Tabs} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromotionPage;

  tab3Root = AboutPage;

  tab4Root = ContactPage;
  ft:any
  f9:any;


  constructor(public navCtrl: NavController,public nv:NavParams) {
  // if(this.nv.get("tab")!=null) {
    // this.f9 = this.navCtrl.parent;
    // this.f9.select(this.nv.get("tab"))
   //}
  }
}
