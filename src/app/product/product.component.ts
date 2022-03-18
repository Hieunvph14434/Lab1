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
      name : "1",
      mota:"1",
      gia:5
    },
    {
      name : "2",
      mota:"1",
      gia:5
    },
    {
      name : "3",
      mota:"1",
      gia:5
    }
  ];

  fillter = this.products;

  newProduct = {
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
        if(this.products[i].name === this.newProduct.name){
          this.products[i] = this.newProduct;
        }
        this.isEdit = false;
      }
    }else {
      this.products.push(key);
    }
    this.newProduct = {
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
