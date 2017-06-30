import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ElectronicsListComponent } from './electronics-list.component';

import { ElectronicsComponent } from './electronics.component';

import { Item } from "../item";

import { LocalStorageService } from 'angular-2-local-storage';

import { CartService } from '../../cart/cart.service';

import { AuthService } from "../../user/auth.service";

import { toast } from "../../../js/toast";

//import { here } from "./store.js";
@Component({
  selector: 'app-electronics-display',
  templateUrl: './electronics-display.component.html',
  styleUrls: ['./electronics-display.component.css']
})
export class ElectronicsDisplayComponent implements OnInit {

items: Item[] =JSON.parse(localStorage.getItem("savedData3")) || [{"name":"Moto G4","cost":15000,"costtype":"Rupee","type":"Mobile","id":"1"},{"name":"iPhone 7s","cost":85000,"costtype":"Rupee","type":"Mobile","id":"1"},{"name":"Ear Phone","cost":2000,"costtype":"Rupee","type":"Mobile Accessories","id":"1"},{"name":"SD Card 16GB","cost":500,"costtype":"Rupee","type":"Mobile Accessories","id":"1"},{"name":"RAM 8GB","cost":4000,"costtype":"Rupee","type":"Computer Accessories","id":"1"},{"name":"Mouse ","cost":600,"costtype":"Rupee","type":"Computer Accessories","id":"1"},{"name":"Mobile","cost":"1000","costtype":"USD","type":"Mobile","id":"1"}];
item : Item;
x: Item;
  constructor(private localStorageService: LocalStorageService, private cartService: CartService, private authService: AuthService) {
     localStorage.setItem("savedData3", JSON.stringify(this.items));
   }

  ngOnInit() {
  }

onClicked(item1)
{ 
             var entry = {
                'name'     : item1.name,
                'cost'     : item1.cost, 
                'costtype' : item1.costtype,       
                'type'     : item1.type, 
                'id'       : item1.id,
            };
  this.items.push(entry);
  localStorage.setItem("savedData3", JSON.stringify(this.items));
}
toCart(item){
if(this.authService.isAuthenticated()== true){
    
  var entry = {
                'name'     : item.name,
                'cost'     : item.cost, 
                'costtype' : item.costtype,       
                'type'     : item.type, 
                'id'       : item.id,
  }
  this.cartService.addtoCart(entry);
toast("Added to Cart",2000);
}
else{
  toast("Please Login",2000);
}
}
}
