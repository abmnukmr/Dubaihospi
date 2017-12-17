//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {HttpClient} from "@angular/common/http";


/*
  Generated class for the DoctordataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctordataProvider {
  data:any;
  constructor(public http: HttpClient) {
    console.log('Hello DoctordataProvider Provider');
  }
  getdata(){

    if (this.data) {
      console.log("g");
      // return Promise.resolve(this.data);
      return new Promise(resolve => {


        this.http.get(' https://mavaeed.herokuapp.com/searchdoc')
          .subscribe(data => {
              this.data = data;
              resolve(this.data);
              //console.log(data);
              console.log("reloded");

            },
            err => {
              this.data = null;

              console.log("Oops!");

            }
          );


      });


    }

    return new Promise(resolve => {


      this.http.get(' https://mavaeed.herokuapp.com/searchdoc')
        .subscribe(data => {
            this.data = data;
            resolve(this.data);
            //console.log(data);
            console.log("ghdgggg");


          },

          err => {
            //          this.data={"error":"error"};
            console.log("Oops");

            //  return this.errror=2;


          },
          ()=>{
            console.log("Done");
//              errror=2;

            //return this.errror=2;

          }
        );


    });
  }





}
