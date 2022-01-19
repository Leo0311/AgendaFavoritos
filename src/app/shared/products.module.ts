import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from '../feature/products/products-routing.module';
import { SharedModule } from './shared.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
