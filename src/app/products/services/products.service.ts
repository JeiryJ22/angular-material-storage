import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { environments } from '../../../environments/environments';
import { error } from 'node:console';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;


  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/productos`);
  }

  getProductById(id:string): Observable<Product | undefined> {//Emite una de las 2
    return this.http.get<Product>(`${this.baseUrl}/productos/${id}`)
      .pipe(
        catchError(error => of(undefined))//Observable basado en el valor
      )
  }

  getSuggestions(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/productos?q=${query}&_limit=6`);
  }

}
