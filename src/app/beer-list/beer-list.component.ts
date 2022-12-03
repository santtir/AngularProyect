import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
import { BeerCartServiceService } from '../beer-cart-service.service';
import { BeerDataService } from '../beer-data.service';
import { Beer } from './beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {


  beers: Beer[] = [];


  constructor(private cart: BeerCartServiceService, private beersDataService: BeerDataService) {
   }

  ngOnInit(): void {
    this.beersDataService.getAll()
    .subscribe(beers=>this.beers= beers);
  }

  maxReached($event: String) {
    console.log($event);
    }

    addToCart(beer: Beer):void{
      if(beer.quantity>0){
        this.cart.addToCart (beer);
        beer.stock-=beer.quantity;
        beer.quantity=0;
      }else{
        alert('error la cantidad no puede ser 0');
        
      }
    }
}
