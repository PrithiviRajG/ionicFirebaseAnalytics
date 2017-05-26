import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private firebase: Firebase) {
    this.firebase.setScreenName("Home").then(()=>{
      console.log("success");
    });
  }

  analyticsButton(){
    this.firebase.logEvent("select_content", {content_type: "page_view", item_id: "home"}).then(()=>{
      console.log("success");
    });
  }

}
