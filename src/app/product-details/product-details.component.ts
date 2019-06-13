import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productsDanhSach } from '../productsDanhSach';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetail;
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.productDetail = productsDanhSach[+params.get('productId')];
  });
  }

}