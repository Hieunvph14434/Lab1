import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
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

  fillter = this.products;

  newProduct = {
    id:0,
    name : "",
    mota:"",
    gia:0
  }

  isEdit = false;

  onSubmit(key:any){
    if(!this.validate(this.newProduct)){
      return;
    }

    if(this.isEdit){
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].id === this.newProduct.id){
          this.products[i] = this.newProduct;
        }
        this.isEdit = false;
      }
    }else {
      this.newProduct.id = this.products.length + 1;
      this.products.push(this.newProduct);
    }
    this.newProduct = {
      id:0,
      name : "",
      mota:"",
      gia:0
    }
  }

 edit(obj:any){
  this.newProduct = obj;
  this.isEdit = true;
 }

 remove(nameProduct:string){
  this.fillter = this.fillter.filter(product=>{
    return product.name !== nameProduct;
  })
 }


 validate(obj:any){
    if(!obj.name || !obj.mota ||!obj.gia){
      return false;
    }
    return true;
 }

 search(event:any){
    const value = event.target.value;
    const valueLowerCase = value.toLowerCase();
    const valueTrimLowerCase = valueLowerCase.trim();
    this.fillter = this.products.filter((product)=>{
      const lowerProductName = product.name.toLowerCase();
      return lowerProductName.indexOf(valueTrimLowerCase) !== -1;
    })

 }

}
