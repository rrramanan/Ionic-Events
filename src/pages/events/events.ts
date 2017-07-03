import { Component } from '@angular/core';
import { NavController, Events , MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
frmLogin: FormGroup; 
submitAttempt: boolean = false; 
name: any;
username: any;
userStatus: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public events: Events, public menu: MenuController ) {

    this.frmLogin = new FormGroup({
        textName : new FormControl({value: 'Adminstrator', disabled: true},Validators.required),
         textUsername : new FormControl({value: 'admin', disabled: true},Validators.required)
         
      });

    this.events.subscribe("userLogin:Yes",(object)=>{
      this.userStatus = object['name'];
          if(this.userStatus == null){
             this.menu.enable(true,"loginNo");
             this.menu.enable(false,"loginYes");
          }else{ 
            this.menu.enable(true,"loginYes");
            this.menu.enable(false,"loginNo");
          }
    });
  
}

  login(){ 
              
      this.submitAttempt = true;
      this.name	     = this.frmLogin.controls['textName'].value;
      this.username  = this.frmLogin.controls['textUsername'].value;
      let myParam = {name:this.name};
      this.events.publish("userLogin:Yes",myParam);

  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad Events");
  }

}
