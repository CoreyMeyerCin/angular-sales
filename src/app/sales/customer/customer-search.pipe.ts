import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customers:Customer[], searchCriteria: string = ""): Customer[] {
    //if null
    if(searchCriteria === ""){
      return customers;
    }

    let selectedCustomers:Customer[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    
    for(let cust of customers){
      if(cust.name.toLowerCase().includes(searchCriteria)|| cust.stateCode.toLowerCase().includes(searchCriteria)){
        selectedCustomers.push(cust);
      //seachCriteria.substring vs customer.name
    }
   
  }
  return selectedCustomers;
  }

}
