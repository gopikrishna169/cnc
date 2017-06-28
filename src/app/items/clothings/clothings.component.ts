import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ClothingsListComponent } from "./clothings-list.component";

import { Item } from "../item";
@Component({
  selector: 'app-clothings',
  templateUrl: './clothings.component.html',
  styleUrls: ['./clothings.component.css']
})
export class ClothingsComponent implements OnInit {
item: Item;
@Output() clicked = new EventEmitter<Item>();
  constructor() { 

    this.item=new Item("Shirt","1000","Casuals","Rupee","1");
  }

  ngOnInit() {
  }

 
onClicked() {
  this.clicked.emit(this.item)
}
}
