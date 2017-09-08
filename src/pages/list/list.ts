import { Component } from '@angular/core'
import { NavController, NavParams, ActionSheetController} from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'
import { CartService } from '../../app/CartService'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private carts: Array<{amount: number, price: number, name: string, temperature: string, sweetness: string, tableNo: string}> = []
  private iceDict = {}
  private sweetDict = {}
  private summary = {}

  constructor(
      public rest: RestProvider,
      public navCtrl: NavController,
      public cartService: CartService, 
      public actionSheetCtrl: ActionSheetController,
      public navParams: NavParams) {
    // If we navigateD to this page, we will have an item available as a nav param
    this.carts = navParams.get('carts')
    this.iceDict = rest.getIceDict()
    this.sweetDict = rest.getSweetDict()
    this.compulte()
  }

  compulte(){
    let price = 0
    for (let item of this.carts){
      price += item['amount'] * item['price']
    }
    this.summary['price'] = price
  }

  delete(event, item, i) {
    this.carts.splice(i, 1)
    this.compulte()
    this.cartService.setCarts(this.carts)
  }

  pay(event){
    let actionSheet = this.actionSheetCtrl.create({
      title: '支付方式',
      buttons: [{
          text: '微信支付',
          handler: () => {
            this.rest.postOrders(this.carts).subscribe(res =>{
              // TODO 微信支付
            })
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}
