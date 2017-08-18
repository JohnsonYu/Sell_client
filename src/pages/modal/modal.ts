import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html',
  selector: 'page-madal'
})
export class ModalContentPage {
  item: any;
  amount: number = 1;
  temperature: string = 'regular';
  sweetness: string = 'regular';

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.item = this.params.get('item');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  save() {
    console.log(this.amount);
    console.log(this.temperature);
    console.log(this.sweetness);
    this.viewCtrl.dismiss();
  }
  select(item, type, mode) {
    for( let col of item.path[2].children){
      col.children[0].classList.remove("selected");
    }
    item.srcElement.classList.add("selected");
    switch (type) {
      case "temperature":
        this.temperature = mode;
        break;
      default:
        this.sweetness = mode;
        break;
    }
  }
}