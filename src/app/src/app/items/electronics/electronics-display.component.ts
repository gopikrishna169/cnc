import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { ElectronicsListComponent } from './electronics-list.component';

import { ElectronicsComponent } from './electronics.component';

import { Item } from "../item";

import { LocalStorageService } from 'angular-2-local-storage';

import { CartService } from '../../cart/cart.service';

import { AuthService } from "../../user/auth.service";

import { toast } from "../../../js/toast";

import { ApiService } from '../../api.service';


//import { here } from "./store.js";
@Component({
  selector: 'app-electronics-display',
  templateUrl: './electronics-display.component.html',
  styleUrls: ['./electronics-display.component.css']
})
export class ElectronicsDisplayComponent implements OnInit {
   items: Item[] =  JSON.parse(localStorage.getItem("electronics"));
  
  constructor(private localStorageService: LocalStorageService, private cartService: CartService, private authService: AuthService, private apiService: ApiService ) {
      this.apiService.getAllelectronics().subscribe(res => {
      this.items =  res;
      localStorage.setItem("electronics", JSON.stringify(this.items));
      });
   
   }

  ngOnInit() {
  }

isAuthadmin(){
  if(this.authService.auth==true)
  return true;
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
