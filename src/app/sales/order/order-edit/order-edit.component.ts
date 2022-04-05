import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order!:Order;
  customers!: Customer[];

  constructor(private ordersvc: OrderService,
    private custsvc: CustomerService,
    
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    this.ordersvc.create(this.order).subscribe({
      next:(res) => {
        console.debug("Order added");
        this.router.navigateByUrl("/order/list");
      },
      error:(err) =>{
        console.error(err);
      }
    })
  } 
  ngOnInit(): void {
      this.custsvc.list().subscribe({
        next:(res) =>{
          console.debug("Customers",res);
          this.customers=res;
        }
      })
  }

}
