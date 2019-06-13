import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productsDanhSach } from '../productsDanhSach';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = productsDanhSach[+params.get('productId')];
  });
  }

}