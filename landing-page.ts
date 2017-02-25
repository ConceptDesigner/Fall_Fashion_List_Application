import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPagePage} from "../login-page/login-page";

/*
 Generated class for the LandingPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html'
})
export class LandingPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandingPagePage Page');
  }

  /**
   goToHomePage():void{
    this.navCtrl.push(HomePage)
  }
   **/

  goToLoginPage():void{
    this.navCtrl.push(LoginPagePage)
  }



}
