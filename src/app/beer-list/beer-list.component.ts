import { Component, OnInit } from '@angular/core';
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
      image: "assets/img/golden.jpg",
      promo:false,
    },
    {
      name: "Myke Tyson",
      type: "IPA",
      price: 700,
      stock: 8,
      image: "assets/img/ipa.png",
      promo:true,

    },
    {
      name: "Verano en la Playa",
      type: "APA",
      price: 600,
      stock: 0,
      image: "assets/img/APA.jpg",
      promo:true,
    },
    {
      name: "Libermann",
      type: "Scotish",
      price: 500,
      stock: 3,
      image: "assets/img/roja.png",
      promo:true,
    },
    {
    name:"Morocha Fria",
    type:"Porter",
    price:650,
    stock:10,
    image:"assets/img/porter.jpg",
    promo:false,

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
