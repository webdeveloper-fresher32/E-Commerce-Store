import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { authGuard } from './guard/auth.guard';
import { authgardprotectedGuard } from './guard/authgardprotected.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    component: HeroSectionComponent,
    canActivate: [authgardprotectedGuard]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [authgardprotectedGuard]
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    canActivate: [authgardprotectedGuard]
  },
  {
    path: 'details/:productId',
    component: ProductDetailsComponent,
    canActivate: [authgardprotectedGuard]
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
    canActivate: [authgardprotectedGuard]
  }, {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authgardprotectedGuard]
  }, {
    path: 'categories/:category',
    component: CategoriesComponent,
    canActivate: [authgardprotectedGuard]
  },
  {
    path: "**", component: NotfoundComponent,
    canActivate: [authgardprotectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
