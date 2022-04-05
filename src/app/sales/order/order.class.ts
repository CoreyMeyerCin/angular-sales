import { Customer } from "../customer/customer.class";

export class Order{
    id:number=0;
    description: String="";
    shipped: boolean=false;
    total:number=0;
    customerId:number=0;
    customer!: Customer;

}