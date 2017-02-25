import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {CreateAccountPagePage} from "../create-account-page/create-account-page";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LoginPagePage Page');
  }

  goToHomePage():void{
    this.navCtrl.push(HomePage)
  }

  goToCreateAccountPage():void{
    this.navCtrl.push(CreateAccountPagePage)
  }
}
