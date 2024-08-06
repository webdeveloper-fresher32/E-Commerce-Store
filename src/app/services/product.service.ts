import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Products } from '../../products_type';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartItems = new EventEmitter<Products[]>();
  items: Products[] = [];

  constructor(private http: HttpClient) { }

  productList(): Observable<Products[]> {
    return this.http.get<Products[]>("http://localhost:4000/products").pipe(map((res) => res))
  }

  getProduct(id: string) {
    return this.http.get<Products>(`http://localhost:4000/products/${id}`);
  }
  // http://localhost:4000/products/1
  searchProduct(query: string): Observable<Products[]> {
    return this.http.get<Products[]>(`http://localhost:4000/products/search?q=${query}`).pipe(map((res) => res))
  }
  localaddtocart(data: Products) {
    let cartData: Products[] = [];
    let localCart = localStorage.getItem("localCart");
    if (localCart) {
      cartData = JSON.parse(localCart);
    }
    cartData.push(data);
    localStorage.setItem("localCart", JSON.stringify(cartData));
    this.cartItems.emit(cartData);
  }


  removeItemfromCart(productId: number) {
    const cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Products[] = JSON.parse(cartData);
      items = items.filter((item: Products) => {
        return productId != item.id
      })
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartItems.emit(items);
    }
  }

  getCartItems(): Products[] {
    const cartData = localStorage.getItem('localCart');
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      return [];
    }
  }
}
