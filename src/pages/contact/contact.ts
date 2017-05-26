import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private firebase: Firebase) {
    this.firebase.setScreenName("Contacts").then(()=>{
      console.log("success");
    });
  }

}
