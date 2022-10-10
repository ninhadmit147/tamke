import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent implements OnInit {
  @Input('content') detailProduct = { name: "" }

  product: any = { id: "", name: "" }
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      // if (params) {
      //   this.product = this.product
      // }
      console.log(id);
      this.productService.detailProduct(id).subscribe(data => {
        console.log(data);
        this.product = data

      })

    })
  }

}
