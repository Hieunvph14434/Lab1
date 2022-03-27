import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
type PRODUCT_ITEM_TYPE = {
  id:number,
  name:string,
  mota:string,
  gia:number
} | undefined;
type PRODUCT_TYPE = PRODUCT_ITEM_TYPE[];
// number[], string[]
// type mix = number | string;
// mix[]
//any
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private id:any = null;
  public showProduct:PRODUCT_ITEM_TYPE;
  constructor(public routes : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');
    console.log(this.id);
    this.showProduct = this.products.find((product)=>{
      return product?.id == this.id;
    })
  }

  products:PRODUCT_TYPE = [
    {
      id:1,
      name : "sp1",
      mota:"5",
      gia:5
    },
    {
      id:2,
      name : "sp2",
      mota:"75",
      gia:5
    },
    {
      id:3,
      name : "sp3",
      mota:"22",
      gia:5
    }
  ];

  // showProduct:PRODUCT_ITEM_TYPE = this.products.find((product)=>{
  //   return product?.id == this.id;
  // })

}
