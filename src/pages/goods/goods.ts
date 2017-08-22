import { Component } from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser'
import { NavController, NavParams, ModalController, ViewController} from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'
import { ModalContentPage } from '../modal/modal'
import { CartService } from '../../app/CartService'
import { ListPage } from '../list/list'

@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class GoodsPage {
  tapItem: any
  icons: string[]
  succulents: string[]
  items: Array<{style: string, title: string, note: string, describe: string, img: string}>

  constructor(
      public viewCtrl: ViewController,
      public cartService: CartService,
      public modalCtrl: ModalController, 
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private _sanitizer: DomSanitizer, 
      public rest: RestProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.tapItem = navParams.get('tapItem')
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build','heart']

    this.items = []
    
    switch (this.tapItem) {
      case "Succulent":
        this.rest.getSucclents().subscribe(results => this.items = results.data)
        break
      case "Tea":
        this.rest.getTea().subscribe(results => this.items = results.data)
        break
      case "Yogurt":
        this.rest.getYogurt().subscribe(results => this.items = results.data)
        break
      default:
        this.rest.getCoffees().subscribe(results => this.items = results.data)
        break
    }
    
  }

  ionViewWillEnter() {
    let cart = document.getElementById('cart')
    this.cartService.setCurrentCart(cart)
  }

  getBackground (image, style, line) {
    let result: string = ""
    if (style == 1 && line == 'first' || style == 0 && line == 'second') {
      result = image
    }
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${result})`)
  }

  itemTapped(event, item) {
    if (item.type == "coffee" || item.type == "tea") {
      let modal = this.modalCtrl.create(ModalContentPage, {'item':item}, {
        cssClass: 'custom-modal' // defined in src/app/app.scss
      })
      modal.present()
    }
  }

  openCart($event){
    const carts = this.cartService.getCarts()
    if (carts.length == 0) {
      return 
    }
    this.navCtrl.push(ListPage, {
      carts: carts
    })
  }
}
