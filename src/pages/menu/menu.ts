import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams,App} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {PromotionPage} from "../promotion/promotion";
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {TabsPage} from "../tabs/tabs";
import {MybookingPage} from "../mybooking/mybooking";
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private rootPage;
  private homePage;
  private aboutPage;
  private contactPage;
  private  promotionPage;
  private MybookingPage=MybookingPage;
   private SettingsPage=SettingsPage;
  constructor(private app:App, public navCtrl: NavController, public navParams: NavParams, private mdl:ModalController) {
    this.rootPage = HomePage;

    this.homePage = HomePage;
    this.aboutPage = AboutPage;
    this.contactPage = ContactPage;
    this.promotionPage=PromotionPage

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {

    this.app.getRootNav().setRoot(TabsPage,{tab:p});
   // this.navCtrl.setRoot(p);
  }
  modal(){
    let md=this.mdl.create(AdwancesearchPage)
    md.present()
  }

  gotos(){
    let md=this.mdl.create(this.SettingsPage)
    md.present()
  }

  gotom(){
    let md=this.mdl.create(this.MybookingPage)
    md.present()
  }
}
