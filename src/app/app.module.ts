import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickCheckoutComponent } from './quick-checkout/quick-checkout.component';
import { ProductPulsaService } from './quick-checkout/ProductPulsa.service';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductItemComponent } from './list-product/list-product-item/list-product-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuickCheckoutComponent,
    ListProductComponent,
    ListProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductPulsaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
