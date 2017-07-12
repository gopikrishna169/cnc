import { Component, OnInit} from '@angular/core';

import { ElectronicsListComponent } from "./electronics-list.component";

import { Item } from "../item";

import { ElectronicsService } from "../item.service";

import { HttpModule, JsonpModule } from '@angular/http';

import { CartService } from '../../cart/cart.service';

import { toast } from '../../../js/toast';

import { ApiService } from '../../api.service'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
items: Item[] =JSON.parse(localStorage.getItem("electronics")) || [] ;
x: Item;
item: Item;

 constructor (private cartService: CartService, private apiService: ApiService) { 
    this.item=new Item("Mobile","1000","Mobile","USD","1");
  }

  ngOnInit() {
   }
 
onClicked()
{ 
 var added ;
 this.apiService.addinelectronics(this.item).subscribe(res => {
 added =  res;
 });
 toast("Added",2000);
}

}