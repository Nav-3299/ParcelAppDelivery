import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { response } from 'express';
// import { RegServiceService} from '../../reg-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  // formBuilder: any;
  name: String;
  email: String;
  passwd: String;
  phone: String;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      passwd: new FormControl(''),
      phone: new FormControl('')

    });
  }
  onOtp() {
    this.phone = this.registerForm.value.phone;
    axios.post('http://localhost:3000/otp', {
            phone: this.phone,
        }).then((response) => {
      alert("Successfully Verified");
      this.registerForm.reset();
    });
  }

  onSubmit() {

    this.email = this.registerForm.value.email,
      this.name = this.registerForm.value.name,
      this.passwd = this.registerForm.value.passwd,
      this.phone = this.registerForm.value.phone
    // console.log(this.email,this.passwd,this.name,this.phone);

    axios.post('http://localhost:3000/register', {
      username: this.name,
      email: this.email,
      phone: this.phone,
      password: this.passwd,

    }).then((response) => {
      alert("Successfully signed in");
      this.registerForm.reset();
    });


    //   this.userService.postUser(Obj).subscribe(
    //     (res) => {
    //       window.alert('success');
    //     },
    //     (err) => {
    //       window.alert('failed');
    //       // resetForm(form);
    //     }
    //   );
  }

}
