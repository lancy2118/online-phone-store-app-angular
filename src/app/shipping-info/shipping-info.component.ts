import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  shippingCost;

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.shippingCost=this.cartService.getShippingInfo();
  }

}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/