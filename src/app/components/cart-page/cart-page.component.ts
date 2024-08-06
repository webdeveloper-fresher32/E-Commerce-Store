import { Component } from '@angular/core';
import { Products } from '../../../products_type';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

type NewType = Products;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cartItems: Products[] = [];
  total: number = 0;

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    const cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData);
      this.calculateTotal();
    }
  }

  increaseQuantity(item: NewType) {
    if (item.quantity < 20) {
      item.quantity++;
      this.updateCart();
    }
  }

  decreaseQuantity(item: Products) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem('localCart', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

}
