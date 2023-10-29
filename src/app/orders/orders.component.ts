import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  customerId!:number;
  orders:any;
  errors:any
  ngOnInit(): void {
    this.http.get("http://localhost:9090/order-service/orders/search/"+this.customerId).subscribe(
      {
        next:(data)=>this.orders=data,
        error:(e)=>this.errors=e
      }

    )

  }
  constructor(private http:HttpClient,private routInfo:ActivatedRoute,private router:Router) {
    this.customerId=routInfo.snapshot.params["idCustomer"]
  }


  showDetails(o: any) {
    this.router.navigateByUrl("/order_items/"+o.id);
  }
}
