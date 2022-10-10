import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:3000/products`
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${this.API}`)
  }
  removeProduct(id: any): Observable<IProducts[]> {
    return this.httpClient.delete<IProducts[]>(`${this.API}/${id}`)
  }
  addProducts(product: any): Observable<IProducts[]> {
    return this.httpClient.post<IProducts[]>(`${this.API}`, product)
  }
  detailProduct(id: any): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(`${this.API}/${id}`)
  }
  updateProduct(id: any, product: any): Observable<IProducts[]> {
    return this.httpClient.put<IProducts[]>(`${this.API}/${id}`, product)
  }
}
