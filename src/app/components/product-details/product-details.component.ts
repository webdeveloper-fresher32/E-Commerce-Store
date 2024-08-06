import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../products_type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productQuantity: number = 1
  removeCart = false
  productData: undefined | Products;
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((data) => {
      this.productData = data
      let cartData = localStorage.getItem('localCart')
      // if (productId && cartData) {
      //   let items = JSON.parse(cartData)
      //   items = items.filter((item: Products) => {
      //     return productId === item.id.toString()
      //   })
      //   if(items.length) this.removeCart=true
      //   else this.removeCart=false
      // }
      if (cartData) {
        const items: Products[] = JSON.parse(cartData);
        this.removeCart = items.some(item => item.id.toString() === productId);
      }
    })
  }

  increaseQuantity() {
    if (this.productQuantity >= 1 && this.productQuantity < 20) {
      this.productQuantity++;
    }
  }

  decreaseQuantity() {
    if (this.productQuantity > 1 && this.productQuantity <= 20) this.productQuantity--;
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.product.localaddtocart(this.productData);
        this.removeCart = true
      } else {

      }
    }
  }

  removefromCart(productId: number) {
    this.product.removeItemfromCart(productId)
    this.removeCart =false
  }

}
