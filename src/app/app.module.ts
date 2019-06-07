import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { SelectedProductDetailsComponent } from './selected-product-details/selected-product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
   RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'product/:productId', component: SelectedProductDetailsComponent},
      { path: 'cart', component:CartComponent},
      { path: 'shipping', component:ShippingInfoComponent},
    ])
     ],
  declarations: [ AppComponent, DashboardComponent,ProductListComponent, ProductAlertComponent, SelectedProductDetailsComponent, CartComponent, ShippingInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
