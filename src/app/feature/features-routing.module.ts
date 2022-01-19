import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'products',
    redirectTo: 'products',
    pathMatch:'full',
},
{
  path:'products',
  canActivate:[],
  loadChildren: async ()=>
  import('./products/products.module')
},{
path: '**',
component:PageNotFoundComponent,
}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FeaturesRoutingModule { }
