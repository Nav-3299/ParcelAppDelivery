import { Component, OnInit } from '@angular/core';
import { ParcelServiceComponent } from '../parcel-service/parcel-service.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  str:String;
  constructor(public help : ParcelServiceComponent) {
    this.str=help.sendvar;
    console.log(this.str);
   }

  ngOnInit(): void {
  }

}
