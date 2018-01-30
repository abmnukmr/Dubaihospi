import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";

/*
  Generated class for the FavouriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouriteProvider {

  constructor(public http: Http) {
    console.log('Hello FavouriteProvider Provider');
  }


  deletee(id,em){



    var updatee = {
      "id":id
    }

    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({headers:headers});

    this.http.post('https://mavaeed.herokuapp.com/upload/promo/doctor/del/' + em, JSON.stringify(updatee), options)

      .subscribe(data => {
        console.log(data)

       // this.loading.dismissAll();
        //this.Dismiss();
        // this.pet='about'
       // this.ref()
        alert("Your Appointment is Cancelled.")
        //this.navCtrl.push(WalletPage);
      }, err => {
        console.log("Error!:", err.json());
     //   this.loading.dismiss();
      });

   // this.loading.dismiss();
    //  this.Dismiss();

  }




}
