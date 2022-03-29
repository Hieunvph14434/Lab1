import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
   this.getList();
  }

  getList(){
    this.postService.getPosts().subscribe((data)=>{
      this.posts = data;
    });
  }

  remove(id:any){
    const hoi = confirm('Bạn có muốn xóa không?');
    if(hoi == false) return;
    this.postService.removePost(id).subscribe(()=>{
      this.getList();
    });
  }


}
