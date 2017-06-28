import { Component, OnInit } from '@angular/core';

import { Item } from "../items/item";

import { LocalStorageService } from 'angular-2-local-storage';

import { CartService } from './cart.service';

import { AuthService } from '../user/auth.service';

import { toast } from '../../js/toast'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items: Item[] =JSON.parse(localStorage.getItem(this.authService.getid()));
constructor( private localStorageService: LocalStorageService, private authService: AuthService, private cartService: CartService ) { }
 
  ngOnInit() {
  }

orderPlaced(){
  toast("Order Placed", 2000)
}

remove(item){
if(this.authService.isAuthenticated()== true){
    
  var entry = {
                'name'     : item.name,
                'cost'     : item.cost, 
                'costtype' : item.costtype,       
                'type'     : item.type, 
                'id'       : item.id,
  }
  this.cartService.removefromCart(entry);
  toast("Removed",2000);
}
}
}
