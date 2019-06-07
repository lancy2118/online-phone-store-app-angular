import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInfo} from '../productInfo';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-selected-product-details',
  templateUrl: './selected-product-details.component.html',
  styleUrls: ['./selected-product-details.component.css']
})
export class SelectedProductDetailsComponent implements OnInit {
 product;
  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product=productInfo[+params.get('productId')];
    });
    
  }

  addToCart(product){
    window.alert('This product has been added to cart');
    this.cartService.addToCart(product);
  }

}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/