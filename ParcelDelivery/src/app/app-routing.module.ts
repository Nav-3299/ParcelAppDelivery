import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { ParcelServiceComponent } from './Components/parcel-service/parcel-service.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
const routes: Routes = [
  {
   path:'',
   component:LoginFormComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'ParcelService',
    component:ParcelServiceComponent
  },
  {
    path:'history',
    component:OrderHistoryComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
