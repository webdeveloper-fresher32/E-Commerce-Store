import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../products_type';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  products: Products[] = [];
  searchQuery: string = "";


  ngOnInit(): void {
    this.list()
    gsap.from('.main', { duration: 4, opacity: 0, x: -50 ,easeinout: "elastic.out(1, 0.3)"});
  }
  constructor(private productinfo: ProductService) { }
  list() {
    return this.productinfo.productList().subscribe((data) => {
      this.products = data
    })
  }
}
