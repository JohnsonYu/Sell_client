import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { GoodsPage } from '../goods/goods';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public altCtrl: AlertController) {
  }

  doAlert(tapItem) {
    // let alert = this.altCtrl.create({
    //   title: 'New Friend!',
    //   message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
    //   buttons: ['Ok']
    // });
    // alert.present()
    this.navCtrl.push(GoodsPage, {
      tapItem: tapItem
    })
  }

  openCart() {
    console.log('open orders')
  }
}
