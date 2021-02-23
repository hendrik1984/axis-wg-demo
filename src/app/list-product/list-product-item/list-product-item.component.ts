import { Component, Input, OnInit } from '@angular/core';
import { ProductPulsa } from 'src/app/shared/product-pulsa.model';

@Component({
  selector: 'app-list-product-item',
  templateUrl: './list-product-item.component.html',
  styleUrls: ['./list-product-item.component.css']
})
export class ListProductItemComponent implements OnInit {
  @Input() productPulsa: ProductPulsa[];
  @Input() index: number;
  @Input() msisdn: string;
  @Input() email: string;

  constructor() {
    console.log(this.productPulsa);
   }

  ngOnInit(): void {
  }

}
