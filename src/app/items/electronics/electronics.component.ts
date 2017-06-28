import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ElectronicsListComponent } from "./electronics-list.component";

import { Item } from "../item";

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
item: Item;
@Output() clicked = new EventEmitter<Item>();
  constructor() { 

    this.item=new Item("Mobile","1000","Mobile","USD","1");
  }

  ngOnInit() {
  }

 
onClicked() {
  this.clicked.emit(this.item)
}
}
