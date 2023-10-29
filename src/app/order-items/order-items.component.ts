import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit{

  orderId!:number
  orderItems:any
  errors:any

  ngOnInit(): void {
    this.http.get("http://localhost:9090/order-service/orders/"+this.orderId).subscribe(
      {
        next:(data)=>this.orderItems=data,
        error:(e)=>this.errors=e
      }
    )
  }

  constructor(private http:HttpClient,private activateUrl:ActivatedRoute) {
    this.orderId=activateUrl.snapshot.params["idOrder"]
  }





}
