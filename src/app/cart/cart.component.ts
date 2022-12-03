import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BeerCartServiceService } from '../beer-cart-service.service';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Beer[]>; 

  constructor(private cart: BeerCartServiceService) {
    this.cartList$= cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
