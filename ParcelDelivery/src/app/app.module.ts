import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './Components/logo/logo.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { RegisterComponent } from './Components/register/register.component';
import { ParcelServiceComponent } from './Components/parcel-service/parcel-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegServiceService } from './reg-service.service';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginFormComponent,
    RegisterComponent,
    ParcelServiceComponent,
    OrderHistoryComponent,
    FeedbackComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [RegServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
