import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'products-product-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {

  @Input()
  public product!: Product;

  ngOnInit():void {
    if (!this.product) throw Error('Product property is required');
  }

}
