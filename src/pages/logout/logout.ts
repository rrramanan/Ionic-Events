import { Component } from '@angular/core';
import { NavController, Events, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {
userStatus: any;
  constructor(public navCtrl: NavController, public events: Events, public menu: MenuController) {

    this.events.subscribe("userLogin:No",(object)=>{
      this.userStatus = object['state'];
          if(this.userStatus == "logout"){ 
             this.menu.enable(true,"loginNo");
             this.menu.enable(false,"loginYes");
          }else{ 
            this.menu.enable(true,"loginYes");
            this.menu.enable(false,"loginNo");
          }
    });

  }

  logout(){
     let myParam = {state:"logout"};    
     this.events.publish("userLogin:No",myParam);
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad Logout");
  }

}
