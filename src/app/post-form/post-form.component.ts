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
  constructor(private postService:PostService, private route:Router) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('',[Validators.required, Validators.minLength(6)]),
      status: new FormControl(0),
    });
  }

   get err(){
     return this.postForm.controls;
   }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.postService.storePost(data).subscribe(()=>{
      this.route.navigate(['/posts']);
    })
  }

}
