import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { QuickCheckoutComponent } from './quick-checkout/quick-checkout.component';

const routes: Routes = [
  { path: '', redirectTo: '/list_product', pathMatch: 'full' },
  { path: 'list_product', component: ListProductComponent },
  { path: 'quick_checkout/pulsa', component: QuickCheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
