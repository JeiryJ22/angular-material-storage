import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class ProductPageComponent implements OnInit {

  public productExist?: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(700),
        switchMap(({id}) => this.productService.getProductById(id)),
      )
    .subscribe(product => {
      if (!product) return this.router.navigate(['/products/list']);
      this.productExist = product;
      return;
    })
  }

  goBack():void {
    this.router.navigateByUrl('/products')
  }

}
