import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private firebase: Firebase) {
    this.firebase.setScreenName("About").then(()=>{
      console.log("success");
    });
  }

}
