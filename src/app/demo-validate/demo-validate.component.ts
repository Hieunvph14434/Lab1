import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validator, Validators, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-demo-validate',
  templateUrl: './demo-validate.component.html',
  styleUrls: ['./demo-validate.component.css']
})
export class DemoValidateComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  portfolioForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.email]),
    avatar: new FormControl(''),
    address: new FormControl(''),
    // webUrl: new FormControl('')
  });
  // valid = this.fb.group({
  //   'name':['',[Validators.required, Validators.email]],
  //   'address':[''],
  //   'avatar':[''],
  // });
  get name(){
    return this.portfolioForm.get('name');
  }
  // get f(){
  //   return this.valid.controls;
  // }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
