import { PostService } from './service/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
//inport thành phần form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoValidateComponent } from './demo-validate/demo-validate.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component'
import { StudentService } from './service/student.service';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ProductComponent,
    DemoValidateComponent,
    ProductDetailComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentFormComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    PostComponent,
    PostDetailComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // đưa vào để các component con có thể sử dụng
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [StudentService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
