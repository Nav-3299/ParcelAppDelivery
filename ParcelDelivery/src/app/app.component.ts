import { Component } from '@angular/core';
import { LogoComponent } from './Components/logo/logo.component';
import { LoginFormComponent} from './Components/login-form/login-form.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private logo:LogoComponent){

  // }
  title = 'parcelDelivery';
}
