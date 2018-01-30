import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {

  data:any;
  constructor(public http: HttpClient) {
    console.log('Hello DoctordataProvider Provider');
  }
  getdata(id){

    if (this.data) {
      console.log("g");
      // return Promise.resolve(this.data);
      return new Promise(resolve => {


        this.http.get(' https://mavaeed.herokuapp.com/get/user/'+ id)
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


      this.http.get(' https://mavaeed.herokuapp.com/get/user/'+ id)
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
