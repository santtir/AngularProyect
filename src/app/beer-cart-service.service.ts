import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/beer';


@Injectable({
  providedIn: 'root'
})
export class BeerCartServiceService {

  private _cartList: Beer[]=[]
  cartList:  BehaviorSubject<Beer[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer | undefined = this._cartList.find((v1) => v1.name == beer.name);

    if (typeof item=='undefined') {
      this._cartList.push({... beer });
      
    } else {
      item.quantity += beer.quantity;
      console.log('en else');
      
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
