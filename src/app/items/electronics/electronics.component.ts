import { Component, OnInit} from '@angular/core';

import { ElectronicsListComponent } from "./electronics-list.component";

import { Item } from "../item";

import { ElectronicsService } from "../item.service";

import { HttpModule, JsonpModule } from '@angular/http';

import { CartService } from '../../cart/cart.service';

import { toast } from '../../../js/toast'
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
items: Item[] =JSON.parse(localStorage.getItem("savedData3")) || [] ;
x: Item;
item: Item;

 constructor (private cartService: CartService) { 

    this.item=new Item("Mobile","1000","Mobile","USD","1");
  }

  ngOnInit() {
   }
 
onClicked()
{ 
 this.cartService.addtoelectronics(this.item);
 toast("Added",2000);
}
}