import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  checkOutForm;
  constructor(
    private cartService:CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cartItems=this.cartService.getItems();
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
     // Process checkout data here
  onSubmit(customerData) {
    window.alert(' Your order has been submitted'+customerData.name);
    this.cartItems = this.cartService.clearCart();
    this.checkOutForm.reset();
  }


}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/