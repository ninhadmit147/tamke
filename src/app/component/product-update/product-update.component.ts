import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  prodName: string = ""
  product = {
    name: "",
    id: ""
  }
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

  }
  onHandleUpdate(evenr: any) {
    this.product.name = this.prodName
    this.route.params.subscribe(params => {
      const id = params['id']
      this.product.id = id
    })
    this.productService.updateProduct(this.product.id, this.product).subscribe()
    this.router.navigate(['products'])


  }
}
