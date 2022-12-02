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
      image: "https://raw.githubusercontent.com/santtir/IpaCerveceria/main/src/assets/img/golden.jpg",
      promo:false,
      quantity: 0,
    },
    {
      name: "Myke Tyson",
      type: "IPA",
      price: 700,
      stock: 8,
      image: "https://raw.githubusercontent.com/santtir/IpaCerveceria/main/src/assets/img/ipa.png",
      promo:true,
      quantity: 0,


    },
    {
      name: "Verano en la Playa",
      type: "APA",
      price: 600,
      stock: 0,
      image: "https://raw.githubusercontent.com/santtir/IpaCerveceria/main/src/assets/img/APA.jpg",
      promo:true,
      quantity: 0,

    },
    {
      name: "Libermann",
      type: "Scotish",
      price: 500,
      stock: 3,
      image: "https://raw.githubusercontent.com/santtir/IpaCerveceria/main/src/assets/img/roja.png",
      promo:true,
      quantity: 0,

    },
    {
    name:"Morocha Fria",
    type:"Porter",
    price:650,
    stock:10,
    image:"https://raw.githubusercontent.com/santtir/IpaCerveceria/main/src/assets/img/porter.jpg",
    promo:false,
    quantity: 0,


    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  maxReached($event: String) {
    console.log($event);
    }

}
