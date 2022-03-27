import { StudentComponent } from './../student/student.component';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  id:any;

  studentValue:any = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(5)]),
    class:new FormControl('')
  });

  get name(){
    return this.studentValue.get('name');
  }

  studentValue1:any={
    id:0,
    name:'',
    class:""
  };

  constructor(private studentService:StudentService, private route:ActivatedRoute, private routeLink:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.id).subscribe((data)=>{
      this.studentValue1 = data;
    })
  }

  onSubmit(data:any){
    console.log(data);

    if(this.id){
      this.studentService.updateStudent(this.id,data).subscribe(data=>{
        this.routeLink.navigate(['/students']);
      });
    }else {
      this.studentService.addStudent(data).subscribe(data=>{
        this.routeLink.navigate(['/students']);
      });
    }
    // this.studentValue = new FormGroup({
    //   name:new FormControl(''),
    //   class:new FormControl('')
    // });
    // window.location.href="http://localhost:4200/students";

  }

}
