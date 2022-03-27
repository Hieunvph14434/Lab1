import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-demo-validate',
  templateUrl: './demo-validate.component.html',
  styleUrls: ['./demo-validate.component.css']
})
export class DemoValidateComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // portfolioForm = new FormGroup({
  //   name: new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   avatar: new FormControl(''),
  //   address: new FormControl(''),
  //   // webUrl: new FormControl('')
  // });
  portfolioForm = this.fb.group({
    'name':['',[Validators.required, Validators.minLength(5)]],
    'address':[''],
    'avatar':[''],
  });
  get name(){
    return this.portfolioForm.get('name');
  }
  // get f(){
  //   return this.portfolioForm.controls;
  // }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    console.log(data);

  }

}
