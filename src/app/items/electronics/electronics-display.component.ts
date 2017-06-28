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
items: Item[] =JSON.parse(localStorage.getItem("savedData3")) || [];
item : Item;
  constructor(private localStorageService: LocalStorageService, private cartService: CartService, private authService: AuthService) { }

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
