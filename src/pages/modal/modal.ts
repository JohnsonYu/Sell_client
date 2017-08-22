import { Component } from '@angular/core'
import { Platform, NavParams, ViewController } from 'ionic-angular'
import { CartService } from '../../app/CartService'
import { RestProvider } from '../../providers/rest/rest'

@Component({
  templateUrl: 'modal.html',
  selector: 'page-madal'
})
export class ModalContentPage {
  item: any
  amount: number = 1
  temperature: string = 'regular'
  sweetness: string = 'regular'
  table: string = ''
  private iceDict = {}
  private sweetDict = {}


  constructor(
    public rest: RestProvider,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public cartService: CartService
  ) {
    this.item = this.params.get('item')
    this.iceDict = rest.getIceDict()
    this.sweetDict = rest.getSweetDict()
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
  save($event, item) {
    // TODO: 添加tableNo 桌号；
    let tableNo = ''
    try{
      tableNo = $event.srcElement.baseURI.split("?")[1].split("=")[1]
    }catch(e){}
    this.cartService.addGoods(item, this.temperature, this.sweetness, tableNo)
    this.viewCtrl.dismiss(null,null,{animation:'modal-leave'})
  }
  select($event, type, mode) {
    for( let col of $event.path[2].children){
      col.children[0].classList.remove("selected")
    }
    $event.srcElement.classList.add("selected")
    switch (type) {
      case "temperature":
        this.temperature = mode
        break
      default:
        this.sweetness = mode
        break
    }
  }
}