import { Injectable } from '@angular/core'

@Injectable()
export class CartService {

    private carts: Array<{amount: number, price: number, name: string, img: string, temperature: string, sweetness: string, tableNo: string}> = []

    constructor() {
    }

    getCarts(){
      return this.carts
    }
    setCarts(carts){
      this.carts = carts
    }

    setCurrentCart(cart) {
      let current = this.carts.length
      for (let i = 0; i <= 5; i++) {
        cart.classList.remove("cart-"+i)
      }
      if (current > 0 && current <= 5) {
        cart.classList.add("cart-"+current)
      }else if( current > 5) {
        cart.classList.add("cart-5")
      }else{
        cart.classList.add("cart-0")
      }
    }

    addGoods(item, temperature, sweetness, tableNo='') {

      this.carts.push({
        amount: 1,
        price: item.price,
        name: item.title,
        img: item.img,
        temperature: temperature,
        sweetness: sweetness,
        tableNo: tableNo
      })

      let cart = document.getElementById('cart')
      this.setCurrentCart(cart)
    }
}