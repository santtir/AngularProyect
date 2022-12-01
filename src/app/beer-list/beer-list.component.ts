import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
import { Beer } from './beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    {
      name: "La Rubia",
      type: "Golden",
      price: 500,
      stock: 5,
      image: "https://raw.githubusercontent.com/santtir/ipaCerveceria/main/src/assets/img/golden.jpg",
      promo:false,
      quantity: 0,
    },
    {
      name: "Myke Tyson",
      type: "IPA",
      price: 700,
      stock: 8,
      image: "assets/img/ipa.png",
      promo:true,
      quantity: 0,


    },
    {
      name: "Verano en la Playa",
      type: "APA",
      price: 600,
      stock: 0,
      image: "assets/img/APA.jpg",
      promo:true,
      quantity: 0,

    },
    {
      name: "Libermann",
      type: "Scotish",
      price: 500,
      stock: 3,
      image: "assets/img/roja.png",
      promo:true,
      quantity: 0,

    },
    {
    name:"Morocha Fria",
    type:"Porter",
    price:650,
    stock:10,
    image:"assets/img/porter.jpg",
    promo:false,
    quantity: 0,


    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(beer : Beer):void{
    if(beer.quantity<beer.stock){
      beer.quantity++;
    }

  }
  downQuantity(beer : Beer):void{
    if(beer.quantity>0){
      beer.quantity--;
    }

}

changeQuantity(event:any,beer:Beer):void{
  let cant=(event.target.value);
  let inputCant=event.target;
  if(cant>beer.stock){
    cant=0;
    inputCant.value=0;
    console.log('error la cantidad pretendida supera el stock');
  }
  console.log(cant);
  
}

}
