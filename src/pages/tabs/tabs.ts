import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PromotionPage} from "../promotion/promotion";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromotionPage;

  tab3Root = AboutPage;

  tab4Root = ContactPage;

  constructor() {

  }
}
