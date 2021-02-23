import { Component, OnInit } from '@angular/core';
import { ProductPulsaService } from '../quick-checkout/ProductPulsa.service';
import { ProductPulsa } from '../shared/product-pulsa.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProductPulsas: ProductPulsa[];
  msisdn = '';
  email = '';

  constructor(private productPulsaService: ProductPulsaService) { }

  ngOnInit(): void {
    this.listProductPulsas = this.productPulsaService.getProductPulsas();
    console.log(this.listProductPulsas);
  }

}
