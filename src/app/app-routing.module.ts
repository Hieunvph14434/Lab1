import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DemoValidateComponent } from './demo-validate/demo-validate.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'product/:id',
    component:ProductDetailComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'students',
    component:StudentComponent
  },
  {
    path:'students/form',
    component:StudentFormComponent
  },
  {
    path:'students/form/:id',
    component:StudentFormComponent
  },
  {
    path:'demo',
    component:DemoValidateComponent
  },
  {
    path:'students/:id',
    component:StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
