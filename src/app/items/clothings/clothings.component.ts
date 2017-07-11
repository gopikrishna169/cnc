import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ClothingsListComponent } from "./clothings-list.component";

import { Item } from "../item";

import { CartService } from '../../cart/cart.service';

import { toast } from '../../../js/toast';

import { ApiService } from '../../api.service'

@Component({
  selector: 'app-clothings',
  templateUrl: './clothings.component.html',
  styleUrls: ['./clothings.component.css']
})
export class ClothingsComponent implements OnInit {
iitems: Item[] =JSON.parse(localStorage.getItem("savedData5")) || [] ;
x: Item;
item: Item;

 constructor (private cartService: CartService, private apiService: ApiService) { 

    this.item=new Item("Tshirt","1000","Casuals","USD","1");
  }

  ngOnInit() {
   }
 
onClicked()
{ 
 
 var added ;
 this.apiService.addinclothings(this.item).subscribe(res => {
 added =  res;
 });
 
  toast("Added",2000);
}
}
