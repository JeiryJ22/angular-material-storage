import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
