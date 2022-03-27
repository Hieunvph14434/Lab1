import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get(apiUrl);
  }

  getStudent(id:number|string){
    return this.http.get(`${apiUrl}/${id}`);
  }

  remove(id:number|string){
   return this.http.delete(`${apiUrl}/${id}`);
  }

  addStudent(data:string){
    return this.http.post(apiUrl,data);
  }

  updateStudent(id:number|string,data:string){
    return this.http.put(`${apiUrl}/${id}`,data);
  }
}
