import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // @Input() products: { id: number, name: string }[] = []
  products: IProducts[] = []


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id != id)
    })
  }

}
