import { Component } from '@angular/core';
import {ModalController, NavController, PopoverController} from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {AdwancesearchPage} from "../adwancesearch/adwancesearch";
import {OnestepupPage} from "../onestepup/onestepup";
import {DoctordataProvider} from "../../providers/doctordata/doctordata";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  client:any;
  docterdata:any=[];
  items:any;
  title:string='catagory';
  myInput:string="";
  filtter:any;
  constructor(public docdata:DoctordataProvider,public navCtrl: NavController,public popoverCtrl: PopoverController, private mdl:ModalController) {


  this.laoddata();
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuPage);
    popover.present({
      ev: myEvent
    });
  }


  laoddata(){
    this.docdata.getdata().then((data)=>{
      this.docterdata=data;
    })
  }



  modal(){
    let md=this.mdl.create(AdwancesearchPage)
    md.present()
  }

  gotochat(em){
   this.navCtrl.push(OnestepupPage,{"email":em})
  }

  ionViewDidEnter(){
    this.laoddata();
  }

  initializeItems(){

      this.items=this.docterdata;

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
