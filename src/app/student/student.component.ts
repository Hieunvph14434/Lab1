import { StudentFormComponent } from './../student-form/student-form.component';
import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  id:any;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
   this.load();
  }

  load(){
    this.studentService.getStudents().subscribe((data)=>{
      this.students = data;
      console.log(this.students);
    });
  }

  deleteStudent(id:number|string){
    const hoi = confirm("Ban co muon xoa khong!");
    if(hoi==false) return;
    this.studentService.remove(id).subscribe(()=>{
      this.load();
    })
  }



}
