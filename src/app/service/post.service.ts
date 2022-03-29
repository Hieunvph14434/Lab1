import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(api);
  }
  getPost(id:any){
    return this.http.get(`${api}/${id}`);
  }
  removePost(id:any){
    return this.http.delete(`${api}/${id}`);
  }
  storePost(data:string){
    return this.http.post(api, data);
  }
  updatePost(id:any,data:string){
    return this.http.put(`${api}/${id}`, data);
  }
}
