import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/model/products';
import { ProductsService } from 'src/app/core/service/produtos/products.service';
import { FormComponent } from 'src/app/products/form/form.component';
import { ListComponent } from 'src/app/products/list/list.component';

@Injectable()
export class ProductsDataResolver implements Resolve<Products[]>{
  constructor(private productsService : ProductsService){}

  resolve(): Observable<Products[]>{
    return this.productsService.all();
  }
}

@Injectable()
export class ProductsDataResolver implements Resolve<Products>{
  constructor(private productsService: ProductsService) {
    return this.productsService.getOne(route.params.id);
  }
}
const routes: Routes = [
  {
    path:'',
    component: ListComponent,
    resolve:{
      entities: ProductsDataResolver,
    },
  },
  {
    path:'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: ProductsDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ProductsDataResolver,ProductsDataResolver],
})
export class ProductsRoutingModule { }
