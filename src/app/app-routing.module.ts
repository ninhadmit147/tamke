import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "products", component: ProductsComponent, canActivate: [AuthGuard], children: [
      { path: "", component: ProductListComponent }
    ]
  },
  {
    path: "products/product-add", component: ProductAddComponent
  },
  {
    path: "products/:id", component: DetailproductComponent
  },
  {
    path: "products/update/:id", component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
