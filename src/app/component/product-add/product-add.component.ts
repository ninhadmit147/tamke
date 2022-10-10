import { ResourceLoader } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Output() onNewEvent = new EventEmitter();
  prodName: string = "";
  product = {
    name: ""
  }
  products: IProducts[] = []
  constructor(private router: Router, private productSerice: ProductService) { }

  ngOnInit(): void {
    this.productSerice.getProducts().subscribe(data => {
      this.products = data
    })
  }
  onHandleAdd(event: any) {
    this.product.name = this.prodName
    console.log(this.product);
    this.productSerice.addProducts(this.product).subscribe()
    if (this.productSerice) {
      this.router.navigate(['products'])
    }
  }


}
