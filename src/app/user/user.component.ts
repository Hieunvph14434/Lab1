import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  users=[
    {
      id:1,
      name:"hieu",
      age:20,
      phone:"0389957717",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyrkzPTNXJknVyLF1WBBb91CMCWeLnWa2Sw&usqp=CAU"
    },
    {
      id:2,
      name:"hieu1",
      age:25,
      phone:"0389957717",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyrkzPTNXJknVyLF1WBBb91CMCWeLnWa2Sw&usqp=CAU"
    },
    {
      id:3,
      name:"hieu2",
      age:22,
      phone:"0389957717",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyrkzPTNXJknVyLF1WBBb91CMCWeLnWa2Sw&usqp=CAU"
    }
  ];

//mảng trung gian khi search
  usersFilter = this.users;

  //chuyển tiếng việt sang unicode 
   slugify(string:string){
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return string.toString().toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-') 
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
    }

  //delete
  remove(userId:number){
    //this.users <=> thuộc tính users của class UserComponent
   this.usersFilter = this.usersFilter.filter(user=>{
      return user.id !== userId;
    });
  }

  //search
  onSearch(event:any){
    const value = event.target.value;
    //chuyển thành chữ thường
    const lowerCaseInputValue = value.toLowerCase();
    //loại bỏ khoảng trắng
    const lowerCaseTrimInputValue = lowerCaseInputValue.trim();
    //chuyển tiếng việt sang unicode
    const convertSlug = this.slugify(lowerCaseTrimInputValue);
    
    this.usersFilter = this.users.filter(user=>{
      const lowerCaseUserName = user.name.toLowerCase();
      return lowerCaseUserName.indexOf(convertSlug) !==-1;
    });
  }

  newUser = {
    id:0,
    name:'',
    age:0,
    phone:'',
    avatar:''
  };

  onChange(event:any, key:string){
    // this.newUser.id = this.users.length + 1;
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value
    };
    console.log(this.newUser);
  }

  onSubmit(){
    if(!this.validate(this.newUser)){
      return;
    }

    if(this.isEdit){
      for (let i = 0; i < this.users.length; i++) {
       if(this.users[i].id === this.newUser.id){
         this.users[i] = this.newUser;
       }
      }
      this.isEdit = false;
    }else{

    this.newUser.id = this.users.length + 1;
    this.users.push(this.newUser);
  }
    this.newUser = {
      id:0,
      name:'',
      age:0,
      phone:'',
      avatar:''
    };
  }
  
  validate(obj: any){
    if(!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar){
      return false;
    }
    return true;
  }

  isEdit = false;

  edit(obj:any){
    this.newUser = obj;
    this.isEdit = true
  }
  
}
