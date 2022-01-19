import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from '../list/list.component';
import { FormComponent } from 'src/app/products/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListComponent,FormComponent],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
