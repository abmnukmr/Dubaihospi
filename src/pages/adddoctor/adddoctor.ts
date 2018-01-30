import { Component } from '@angular/core';
import {
  ActionSheetController, Loading, LoadingController, ModalController, NavController, NavParams, Platform,
  ToastController
} from 'ionic-angular';
import {Http, RequestOptions,Headers} from "@angular/http";
import {DoctordatasearchProvider} from "../../providers/doctordatasearch/doctordatasearch";
import * as firebase from "firebase/app";


import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {UploadprofilePage} from "../uploadprofile/uploadprofile";
import {AddpromoPage} from "../addpromo/addpromo";
/**
 * Generated class for the AdddoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adddoctor',
  templateUrl: 'adddoctor.html',
})
export class AdddoctorPage {
  nt:boolean=true;
  updatee:any;
  Email:any;
  Phone:any;
  About:any;
  Specialize:any;
  Address:any;
  Services:any;
  time:any;
  name:any;
  items:any;
  timeslot:any=[];
  docterdata:any;
  email1:any;
  update:any;
  updateed:any;
  pet:any;
  imagey:any;
  drt:boolean=true;
  lastImage=[] ;
  show:boolean=true;
  loading: Loading;
  forupload:any;
  itemprice:any;
  itemnumber:any;
  discription:any;
  base64Image;
  butn:boolean=false;
  itemname:any;
  images = [];
  imgin;
  targetimages=[];
  ntu:boolean=true;
  address:any="";
  phone:any="";
  description:any="";




  constructor(public Mdl:ModalController,public toastCtrl: ToastController,private transfer: FileTransfer,private FilePath:FilePath,public file: File, private Camera: Camera,public docterr:DoctordatasearchProvider,public navCtrl: NavController,public http:Http,public actionSheetCtrl: ActionSheetController,public platform: Platform, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {
    }



    this.pet="profile"



    this.items = [
      "General physician",

      "ENT(Eye, nose ,throat)",

      "Dermatologist",

      "Dentist",

      "Diabetes",

      "Ophthalmology",

      "Hair fall",

      "Pediatrics",

      "Sexologist",

      "Depression",

      "Pregnancy",

      "Gynaecology & obstetrics",

      "Infertility",

      "Nutritionist /Dietitian",

      "Gastroenterology",

      "Cardiologist",

      "Nephrology",

      "Neurologist",

      "allergist",

      "Geriatrics",

      "Podiatry",

      "Herpetologist",

      "Haematologist",

      "Immunologist",

      "Oncologist",

      "Orthologist",

      "Psychologist",

      "Psychiatrist",

      "Anaesthesiologists",

      "Urologist",

      "Radiologist",

      "Surgeon",

      "Plastic surgeon",

      "Radiologist"

    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddoctorPage');
  }
  edit(){
    this.nt=false;
    this.ntu=false;
  }


  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({

      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Gallery',
          icon: !this.platform.is('ios') ? 'md-aperture' : null,
          handler: () => {
            this.takePicture(this.Camera.PictureSourceType.PHOTOLIBRARY);

            console.log('Gallery item');
          }
        },
        {
          text: 'Camera',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'md-camera' : null,
          handler: () => {

            this.takePicture(this.Camera.PictureSourceType.CAMERA);
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }



  deletes(i) {
    this.images.splice(i, 1);

  }



  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
         allowEdit:true,
         quality:60,
         sourceType: sourceType,
         saveToPhotoAlbum: false,
         correctOrientation: true
    };

    // Get the data of an image
    this.Camera.getPicture(options).then((imagePath) => {
      this.base64Image = 'data:image/jpeg;base64,' + imagePath;
      this.images.unshift({url: imagePath});
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.Camera.PictureSourceType.PHOTOLIBRARY) {
        this.FilePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });

  }


  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName =  n + ".png";
    return newFileName;
  }

// Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.lastImage.push(newFileName);
      this.show=false;
      //  this.presentToast(this.lastImage);
//      this.targetimages.unshift(this.lastImage);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

// Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory+img;
    }
  }


  public uploadImage() {



      this.show = false;
      //this.spinshow = false;
      this.loading.present();

      /*
          var user = firebase.auth().currentUser;
          if (user != null) {
            var  name = user.displayName;
            this.email1 = user.email;
            var  photoUrl = user.photoURL;
          }

          */
      // Destination URL
      var url = "https://vioti.herokuapp.com/upload/image/doctor/" + this.email1;

      // File for Upload
      var targetPath = this.pathForImage(this.lastImage);
      // this.presentToast(targetPath);
      // File name only
      var filename = this.lastImage;

      var options = {
        fileKey: "file",
        httpMethod: "POST",
        //fileName: filename,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        chunkedMode: true,
        mimeType: "image/png",
      //  params: {address: this.address, description: this.description, phone: this.phone}
      };

      const fileTransfer: FileTransferObject = this.transfer.create();


//    const fileTransfer = new Transfer();
      //this.presentToast(fileTransfer);


      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {

        this.loading.dismissAll();
        this.presentToast('Image succesfully uploaded.');
      }, err => {
        this.show = true;
        this.loading.dismissAll();
        this.presentToast("Failed");
        // console.log(err);
        // this.presentToast('Error while uploading file.');
      });

  }












uidlt(id)

   {
     this.loading.present()

     var user = firebase.auth().currentUser;
     if (user != null) {
       this.email1 = user.email;
       var photoUrl = user.photoURL;

     }
      this.updateed = {
        id:id
      }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/upload/promo/doctor/del/' + this.email1, JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'

          this.docterr.getdata(this.email1).then((data)=>{
            this.docterdata=data;
            this.name=this.docterdata.name;
            this.Phone=this.docterdata.phone;
            this.About=this.docterdata.about;
            this.Services=this.docterdata.services;
            this.Address=this.docterdata.Location
            this.Specialize=this.docterdata.doctor_type
            this.timeslot=this.docterdata.slots


            this.imagey=this.docterdata.bg_img;

          })
          this.pet="promos"

          alert("deleted")
          //this.navCtrl.push(WalletPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      //  this.Dismiss();


}










rttr(){
  let md=  this.Mdl.create(AddpromoPage)
   md.present()
  md.onDidDismiss(()=>{
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }

    this.docterr.getdata(this.email1).then((data)=>{
      this.docterdata=data;
      this.name=this.docterdata.name;
      this.Phone=this.docterdata.phone;
      this.About=this.docterdata.about;
      this.Services=this.docterdata.services;
      this.Address=this.docterdata.Location
      this.Specialize=this.docterdata.doctor_type
      this.timeslot=this.docterdata.slots

      this.imagey=this.docterdata.bg_img;

    })

  })
}





  showp(){


    this.drt=true;
    this.nt=true;
    if(this.nt==true){
      this.ntu=true
    }else {
      this.ntu=false;
    }
  }

  showpp(){
    this.drt=true;
    this.nt=false;
    this.ntu=true
  }

  showppp(){

    this.drt=false;
    this.nt=false;
    this.ntu=true
  }







  addtodoc( ){

    if(this.Specialize.trim().length!=0&&this.timeslot!=[]&& this.name.trim().length!=0&&this.Email.trim().length!=0 &&this.Phone.trim().length!=0&&this.About.trim().length!=0&&this.Services.trim().length!=0 &&this.Address.trim().length!=0) {
      this.loading.present();

      this.updatee = {

        "email": this.Email,
        "phone": this.Phone,
        "name":this.name,
        "about": this.About,
        "services": this.Services,
        "doctor_type":this.Specialize,
        //"promos": req.body.promos,
        //"Reviews": req.body.Reviews,
        "Location": this.Address,
        "slots":this.timeslot
        // "doctor_type": req.body.doctor_type,

      }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/add/admin/docter', JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)

          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'
          alert("Added to doctor list")
          //this.navCtrl.push(WalletPage);
        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      this.loading.dismiss();
      //  this.Dismiss();
      this.Email=""
      this.Phone=""
      this.About="",
        this.Services=""
      //"promos": req.body.promos,
      //"Reviews": req.body.Reviews,
      this.Address=""
      this.timeslot=[],
        this.name=""



    }
    else {
      this.Email = ""
      this.Phone = ""
      this.About = "",
        this.Services = "",
        this.name="",
        //"promos": req.body.promos,
        //"Reviews": req.body.Reviews,
        this.Address = ""
      this.timeslot=[]
      alert("Fill all input Properly ")

    }
  }

  additrm(){
    this.timeslot.push({"time":this.time});
    this.time="";
  }

  deltime(i){
    this.timeslot.splice(i,1)
  }




  ionViewDidEnter() {
   this.loading.present();

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }

    this.docterr.getdata(this.email1).then((data)=>{
      this.docterdata=data;
      this.name=this.docterdata.name;
      this.Phone=this.docterdata.phone;
      this.About=this.docterdata.about;
      this.Services=this.docterdata.services;
      this.Address=this.docterdata.Location
      this.Specialize=this.docterdata.doctor_type
      this.timeslot=this.docterdata.slots
      this.imagey=this.docterdata.bg_img
       this.loading.dismissAll();
       this.loading.dismiss();

    })
    console.log("checkin")



  }


uplo(){
   let mg= this.Mdl.create(UploadprofilePage)
     mg.present()
   mg.onDidDismiss(()=>{
     this.ref();
   })
}



  doRefresh(refresher) {
    console.log('Begin async operation', refresher);


    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;
      // this.auth=true;


      this.docterr.getdata(this.email1).then((data)=>{
        this.docterdata=data;
        this.name=this.docterdata.name;
        this.Phone=this.docterdata.phone;
        this.About=this.docterdata.about;
        this.Services=this.docterdata.services;
        this.Address=this.docterdata.Location
        this.Specialize=this.docterdata.doctor_type
        this.timeslot=this.docterdata.slots
        this.imagey=this.docterdata.bg_img


      })

      // this.pet='about'
      console.log("checkin")
    }
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }




  ref(){

    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {
    }




    this.docterr.getdata(this.email1).then((data)=>{
      this.docterdata=data;
      this.name=this.docterdata.name;
      this.Phone=this.docterdata.phone;
      this.About=this.docterdata.about;
      this.Services=this.docterdata.services;
      this.Address=this.docterdata.Location
      this.Specialize=this.docterdata.doctor_type
      this.timeslot=this.docterdata.slots
      this.imagey=this.docterdata.bg_img


    })
    console.log("checkin")
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email1 = user.email;

    }
    else {

    }


  }

  delete(order,doc){

    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      //  this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {
      "docter_email": doc,
      "orderid": order,
    }

    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({headers:headers});

    this.http.post('https://mavaeed.herokuapp.com/delete/' + this.email1, JSON.stringify(this.update),options)
      .subscribe(data => {
        console.log(data)

        this.loading.dismissAll();
        //this.Dismiss();
        // this.pet='about'
        this.ref()
        alert("Your Appointment is Cancelled.")
        //this.navCtrl.push(WalletPage);
      }, err => {
        console.log("Error!:", err.json());
        this.loading.dismiss();
      });

    this.loading.dismiss();
    //  this.Dismiss();

  }



  deletee(id){

    this.loading.present()
    var user = firebase.auth().currentUser;

    if (user != null) {
      //  this.username = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.updatee = {
      "riq":id
    }

    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({headers:headers});

    this.http.post('https://mavaeed.herokuapp.com/upload/promo/doctor/del/' + this.email1, JSON.stringify(this.updatee), options)

      .subscribe(data => {
        console.log(data)

        this.loading.dismissAll();
        //this.Dismiss();
        // this.pet='about'
        this.ref()
        alert("Your Promo is deleted")
        //this.navCtrl.push(WalletPage);
      }, err => {
        console.log("Error!:", err.json());
        this.loading.dismiss();
      });

    this.loading.dismiss();
    //  this.Dismiss();

  }




  edittodoc() {

    if (this.name != "" && this.Phone != "" && this.About != "" && this.Services != "" && this.Specialize != "" && this.Address != "" && this.timeslot != []) {

      this.loading.present();

      var user = firebase.auth().currentUser;
      if (user != null) {
        this.email1 = user.email;

      }
      else {
      }


      this.updatee = {
        "email": this.email1,
        "phone": this.Phone,
        "name": this.name,
        "about": this.About,
        "services": this.Services,
        "doctor_type": this.Specialize,
        "Location": this.Address,
        "slots": this.timeslot

        // "doctor_type": req.body.doctor_type,

      }

      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      var options = new RequestOptions({headers: headers});

      this.http.post('https://mavaeed.herokuapp.com/edit/admin/docter', JSON.stringify(this.updatee), options)
        .subscribe(data => {
          console.log(data)
          this.nt=true;
          this.ntu=true;
          this.loading.dismissAll();
          //this.Dismiss();
          // this.pet='about'

          alert("Your profile is Updated")

        }, err => {
          console.log("Error!:", err.json());
          this.loading.dismiss();
        });

      this.loading.dismiss();
      //  this.Dismiss();


    } else {
      alert("Fill all details")
    }

  }








}
