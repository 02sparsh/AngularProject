import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct():void{
    this.productService.getProduct().subscribe(
      (res=>{
        this.product=res;
        console.log(this.product);
      })
    )
    }
}