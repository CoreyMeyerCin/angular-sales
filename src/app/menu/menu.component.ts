import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Menu[]=[
    new Menu("HOME","/home"),
    new Menu("Customer","/customer/list"),
    new Menu("Order", "/order/list"),
    new Menu("ABOUT","/about")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
