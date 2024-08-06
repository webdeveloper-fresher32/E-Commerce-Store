import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../products_type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: Products[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(productId: number) {
    this.productService.removeItemfromCart(productId);
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
