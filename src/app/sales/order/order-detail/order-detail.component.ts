import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order!: Order;
  customers!:Customer[];
  constructor(private ordersvc: OrderService, private custsvc: CustomerService,
    private route: ActivatedRoute, 
    private router: Router ) { }

  showVerifyButton: boolean = false;
remove(): void{
  this.showVerifyButton = !this.showVerifyButton;
  
}
verifyRemove():void {
  this.showVerifyButton=false;
  this.ordersvc.remove(this.order.id).subscribe({
    next:(res)=>{
      console.debug("Order is deleted");
    this.router.navigateByUrl("/order/list");
    },
    error: (err) =>{
        console.error(err);
    }
  })
}


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.ordersvc.get(id).subscribe({
      next:(res)=>{
        console.debug("Order:",res);
        this.order =res;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
