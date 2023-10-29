import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderItemsComponent} from "./order-items/order-items.component";

const routes: Routes = [
  {
    path:"customers",
    component:CustomersComponent
  },
  {
    path: "products",
    component:ProductsComponent
  },
  {
    path: "orders/:idCustomer",
    component:OrdersComponent
  },
  {
    path:"order_items/:idOrder",
    component:OrderItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

