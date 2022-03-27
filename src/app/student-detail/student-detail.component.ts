import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id:any;
  student:any = {};

  constructor(private StudentService:StudentService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //get id
    this.id = this.activateRoute.snapshot.params['id'];

    //call api

    this.StudentService.getStudent(this.id).subscribe((data)=>{
      this.student = data;
      console.log(this.student);

    })
  }

}
