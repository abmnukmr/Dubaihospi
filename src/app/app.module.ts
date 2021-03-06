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
import { HttpModule } from '@angular/http'
import {PromodtasearchProvider} from "../providers/promodtasearch/promodtasearch";
import { BookingProvider } from '../providers/booking/booking';
import { FavouriteProvider } from '../providers/favourite/favourite';
import {DoctersPage} from "../pages/docters/docters";
import {AdddoctorPage} from "../pages/adddoctor/adddoctor";
import {RegisterPage} from "../pages/register/register";
import {AdduserPage} from "../pages/adduser/adduser";
//import { IonicStorageModule } from '@ionic/storage';

import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";
import {FileTransfer, FileTransferError, FileTransferObject} from "@ionic-native/file-transfer";
import { Transfer } from '@ionic-native/transfer';
import {File} from "@ionic-native/file";
import {UploadprofilePage} from "../pages/uploadprofile/uploadprofile";
import {AddDdctorPage} from "../pages/add-ddctor/add-ddctor";
import {IonicStorageModule} from "@ionic/storage";
import { UserdataProvider } from '../providers/userdata/userdata';
import {AddpromoPage} from "../pages/addpromo/addpromo";


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
    MybookingPage,
    DoctersPage,
    AdddoctorPage,
    RegisterPage,
    AdduserPage,
    UploadprofilePage,
    AddDdctorPage,
    AddpromoPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicStorageModule.forRoot(),
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
    MybookingPage,
    DoctersPage,
    AdddoctorPage,
    RegisterPage,
    AdduserPage,
    UploadprofilePage,
    AddDdctorPage,
    AddpromoPage

  ],
  providers: [DatePicker, EmailComposer,
    Camera,FilePath,File,FileTransfer,FileTransferObject,Transfer,
    StatusBar, GooglePlus,BookingProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DoctordataProvider,
    PromodtasearchProvider,
    PromodtaProvider,
    DoctordatasearchProvider,
    PromodtaProvider,
    AuthProvider,
    BookingProvider,
    FavouriteProvider,
    UserdataProvider
  ]
})
export class AppModule {}
