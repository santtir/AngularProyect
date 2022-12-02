import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {

  constructor() { }

  @Input() 'quantity':number;
  @Input() 'max':number;
  @Output() 'maxReached': EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }


  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
    }

  }
  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }

  }

  stockMax(event: any): void {
    let cant = (event.target.value);
    let inputCant = event.target;
    if (cant > this.max) {
      inputCant.value = 0;
      cant = 0;
      this.quantity=0;
      this.maxReached.emit('error la cantidad pretendida supera el stock: ' + this.max);
    }
    console.log(cant);
    
  }
}
