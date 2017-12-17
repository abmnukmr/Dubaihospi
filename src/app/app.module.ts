import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from "firebase";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PromotionPage} from "../pages/promotion/promotion";
import {MenuPage} from "../pages/menu/menu";
import {AdwancesearchPage} from "../pages/adwancesearch/adwancesearch";
import {OnestepupPage} from "../pages/onestepup/onestepup";
import {Promo2Page} from "../pages/promo2/promo2";
import {SettingsPage} from "../pages/settings/settings";
import {SearchPipe} from "../pipes/search/search";
import { DoctordataProvider } from '../providers/doctordata/doctordata';
import { DoctordatasearchProvider } from '../providers/doctordatasearch/doctordatasearch';
import { PromodtaProvider } from '../providers/promodta/promodta';
import {DatePicker} from "@ionic-native/date-picker";
import {MybookingPage} from "../pages/mybooking/mybooking";
import {EmailComposer} from "@ionic-native/email-composer";
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import {HttpClientModule} from "@angular/common/http";
import {PromodtasearchProvider} from "../providers/promodtasearch/promodtasearch";



export const firebaseConfig = {

  apiKey: "AIzaSyDYV3PrIkavO1HTaCAIdf08erApUvTXeJA",
  authDomain: "mavaeed.firebaseapp.com",
  databaseURL: "https://mavaeed.firebaseio.com",
  projectId: "mavaeed",
  storageBucket: "mavaeed.appspot.com",
  messagingSenderId: "574781895288"

};


firebase.initializeApp(firebaseConfig);
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
    SettingsPage,
    SearchPipe,
    MybookingPage
  ],
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
    SettingsPage,
    MybookingPage

  ],
  providers: [DatePicker, EmailComposer,
    StatusBar, GooglePlus,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DoctordataProvider,
    PromodtasearchProvider,
    PromodtaProvider,
    DoctordatasearchProvider,
    PromodtaProvider,
    AuthProvider
  ]
})
export class AppModule {}
