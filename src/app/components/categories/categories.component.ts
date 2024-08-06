import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../products_type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  category: string | null = '';
  products: Products[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      if (this.category) {
        this.productService.searchProduct(this.category).subscribe(data => {
          this.products = data;
        });
      }
    });
  }

 
}
