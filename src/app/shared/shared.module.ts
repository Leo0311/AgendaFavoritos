import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../products/list/list.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ FormComponent,ListComponent],
})
export class SharedModule {}
