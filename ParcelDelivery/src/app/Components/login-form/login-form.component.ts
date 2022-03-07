import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: String;
  passwd: String;
  public checkoutForm: FormGroup;
  constructor() { }




  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      email: new FormControl('', Validators.required),
      passwd: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    //  axios.post('http://localhost:3000/login', {
    //   email: this.email,
    //   password: this.passwd,

    // }).then((response) => {
    //   console.log(response);
    //   window.open( "ParcelService", "_blank");
    //   console.log("Successfully logged in");
    // });

    // alert("Logged in with "+ JSON.stringify(this.checkoutForm.value));

    // if credentials match then
    if ((this.checkoutForm.value.email)==="" && (this.checkoutForm.value.passwd) === "") {
      alert("fill all fields");
    }
    else {
      // console.log(this.checkoutForm.value.email, this.checkoutForm.value.passwd);
      // if (this.checkoutForm.value.email == "abc@gmail.com" && this.checkoutForm.value.passwd == "123")
      window.open("ParcelService", "_blank");
      this.checkoutForm.reset();
    }

  }



}
