import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../interfaces/products.interface';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {


  public searchInput = new FormControl('');
  public products:Product[] = [];

  constructor(private productService: ProductService) {}

  searchingProduct() {
    const value: string = this.searchInput.value || '';
    this.productService.getSuggestions(value)
      .subscribe(products => this.products = products);
  }
}
