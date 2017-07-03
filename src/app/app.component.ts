import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LogoutPage } from '../pages/logout/logout';


import { EventsPage } from '../pages/events/events';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = EventsPage;
    userStatus: any;
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public event: Events, public menu:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });

    this.event.subscribe("userLogin:Yes",(object)=>{
      this.userStatus = object['name'];
    });

  }
  goToEvents(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventsPage);
  }goToLogout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LogoutPage);
  }
}
