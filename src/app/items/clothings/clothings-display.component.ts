import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

import { LocalStorageService } from 'angular-2-local-storage';

import { CartService } from '../../cart/cart.service';

import { AuthService } from "../../user/auth.service";

import { toast } from "../../../js/toast.js";

import { ApiService } from '../../api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clothings-display',
  templateUrl: './clothings-display.component.html',
  styleUrls: ['./clothings-display.component.css']
})
export class ClothingsDisplayComponent implements OnInit {
items: Item[] =JSON.parse(localStorage.getItem("savedData5")) || [];
item : Item;
  constructor(private localStorageService: LocalStorageService, private cartService: CartService, private authService: AuthService, private apiService: ApiService) {
    localStorage.setItem("savedData5", JSON.stringify(this.items));
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
  localStorage.setItem("savedData5", JSON.stringify(this.items));
  //return this.apiService.createinclothings(item1);
}
toCart(item){
if(this.authService.isAuthenticated()== true){
    debugger;
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
