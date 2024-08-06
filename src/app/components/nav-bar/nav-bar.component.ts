import { Component, Input, OnInit } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../products_type';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  @Input() logoName: string = 'Original Fashion';
  cartItems: number = 0;
  isMobileMenuOpen = false;
  searchResult: undefined | Products[];

  constructor(
    private auth: UserauthService,
    private router: Router,
    private product: ProductService
  ) {}

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  redirecttoDetails(id: number) {
    this.router.navigate([`/details/${id}`]);
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      let cartData = localStorage.getItem('localCart');
      if (cartData) {
        this.cartItems = JSON.parse(cartData).length;
      }
      this.product.cartItems.subscribe((data) => {
        this.cartItems = data.length;
      });
    }
  }

  searchProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((data) => {
        this.searchResult = data;
      });
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(val: string) {
    this.router.navigate([`/search/${val}`]);
  }
}
