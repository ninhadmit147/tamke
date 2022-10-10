import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductsComponent } from './page/products/products.component';
import { HomeComponent } from './page/home/home.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductsComponent,
    HomeComponent,
    DetailproductComponent,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
