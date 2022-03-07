import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-parcel-service',
  templateUrl: './parcel-service.component.html',
  styleUrls: ['./parcel-service.component.css']
})
export class ParcelServiceComponent implements OnInit {
  flagestimate:Number=0;
  flagcoupon:Number=0;
  flagbook:Number=0;
  email: String;
  Length: String;
  Breadth: String;
  Weight: String;
  Pickupadd: String;
  Dropadd: String;
  phone: String;
  cost: string = "";
  str:String;
  sendvar:String;
  
  arr = [{
    "length": "7"
  },
  ];
  constructor() { }

  ServiceForm = new FormGroup({
    email: new FormControl('', Validators.required),
    Length: new FormControl('', Validators.required),
    Breadth: new FormControl('', Validators.required),
    Weight: new FormControl('', Validators.required),
    Pickupadd: new FormControl('', Validators.required),
    Dropadd: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    serviceType: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.flagbook=0;
    this.flagcoupon=0;
    this.flagestimate=0;
  }

  estimate() {
    this.flagestimate=1;

      if (this.ServiceForm.value.Length==="" && this.ServiceForm.value.Breadth ==="" && this.ServiceForm.value.Weight ==="" && this.ServiceForm.value.serviceType ==="" && this.ServiceForm.value.phone==="" && this.ServiceForm.value.email===""&& this.ServiceForm.value.Pickupadd==="" && this.ServiceForm.value.Dropadd==="" ) {
      alert("all fields are required");
      this.flagestimate=0;
      return;
    }
else{
    if (this.ServiceForm.value.Length!="" && this.ServiceForm.value.Breadth !="" && this.ServiceForm.value.Weight !="") {
      if (Number(this.ServiceForm.value.Length) > 20 && Number(this.ServiceForm.value.Breadth) > 20 && Number(this.ServiceForm.value.Weight) > 20) {
        this.cost = "500";
        alert("Cost = " + this.cost);
      }
      else {
        this.cost = "200";
        alert("Cost = " + this.cost);
      }
    }
    else {
      alert("value of length , breadth and weight are required");
    }
    // this.Length = this.ServiceForm.get('Length')?.value; 

    // debugger;
    // alert(JSON.stringify(this.ServiceForm.value));
  }
  }

  coupon() {
    this.flagcoupon=1;
    //diable link;
   
    if (this.ServiceForm.value.Length && this.ServiceForm.value.Breadth && this.ServiceForm.value.Weight) {
      if (Number(this.ServiceForm.value.Length) > 20 && Number(this.ServiceForm.value.Breadth) > 20 && Number(this.ServiceForm.value.Weight) > 20) {
        this.cost = "450";
        alert("Cost = " + this.cost);
      }
      else {
        this.cost = "150";
        alert("Cost = " + this.cost);
      }

    }
    else {
      alert("value of length , breadth and weight are required");

    }
  }

  book() {
    
    if(this.flagestimate===1 ){
    axios.post('http://localhost:3000/parcel', {


      email: this.ServiceForm.value.email,
      Length: this.ServiceForm.value.Length,
      Breadth: this.ServiceForm.value.Breadth,
      Weight: this.ServiceForm.value.Weight,
      Pickupadd: this.ServiceForm.value.Pickupadd,
      Dropadd: this.ServiceForm.value.Dropadd,
      phone: this.ServiceForm.value.phone,
      serviceType: this.ServiceForm.value.serviceType,

    }).then((response) => {
      alert("Successfully booked");
      window.open("feedback","_blank");
    });
  }else{
    alert("All fiels are required");
  }
  }

  history(){
    if(this.ServiceForm.value.email){
    axios.post('http://localhost:3000/viewHistory', {
      email: this.ServiceForm.value.email,

    }).then((response) => {
      // console.log(response);
      this.str=(response.data);
      // this.sendvar=response.data;
      // window.open( "history", "_blank");  

       // this.str=JSON.stringify("hello");
      // console.log("Read");
    });
    
  }
  else{
    alert("Fill email for this");
  }
  }
}
