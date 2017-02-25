import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
 Generated class for the CreateAccountPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-create-account-page',
  templateUrl: 'create-account-page.html'
})
export class CreateAccountPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CreateAccountPagePage Page');
  }
  goToHomePage():void{
    this.navCtrl.push(HomePage)
  }
}
