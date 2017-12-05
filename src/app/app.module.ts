import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PromotionPage} from "../pages/promotion/promotion";
import {MenuPage} from "../pages/menu/menu";
import {AdwancesearchPage} from "../pages/adwancesearch/adwancesearch";
import {OnestepupPage} from "../pages/onestepup/onestepup";
import {Promo2Page} from "../pages/promo2/promo2";
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    MenuPage,
    AdwancesearchPage,
    OnestepupPage,
    Promo2Page,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    MenuPage,
    AdwancesearchPage,
    OnestepupPage,
    Promo2Page,
    SettingsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
