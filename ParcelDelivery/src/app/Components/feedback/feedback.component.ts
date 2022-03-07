import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  email: String;
  feedback: String;
  constructor() { }
  feedbackform = new FormGroup({
    email: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  onfeedback() {
    if(this.feedbackform.value.email===""){
      alert("Fill Email");

    }
    else{

    
    axios.post('http://localhost:3000/feedback', {


      email: this.feedbackform.value.email,
      feedback: this.feedbackform.value.feedback,

    }).then((response) => {
      alert("Successfully taken");
      // window.open("parcel", "_blank");
    });
  }
}

}
