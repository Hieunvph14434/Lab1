import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../service/post.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm:FormGroup;
  id:any;
  constructor(private postService:PostService, private route:Router, private getId:ActivatedRoute) {
    this.postForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      content: new FormControl('',[Validators.required, Validators.minLength(6)]),
      status: new FormControl('0'),
    });
  }

   get err(){
     return this.postForm.controls;
   }


   ngOnInit(): void {
    this.id = this.getId.snapshot.params['id'];

    this.postService.getPost(this.id).subscribe(data=>{
      this.postForm.setValue(data);
    })
  }

  onSubmit(data:any){
  if(this.id){
    this.postService.updatePost(this.id,data).subscribe(()=>{
      this.route.navigate(['/posts']);
    })
  }else {
    this.postService.storePost(data).subscribe(()=>{
      this.route.navigate(['/posts']);
    })
  }
  }

}
