import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ElectronicsListComponent } from "./electronics-list.component";

import { Item } from "../item";

import { ElectronicsService } from "../item.service";

import { HttpModule, JsonpModule } from '@angular/http';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

errorMessage: string;
items: Item[]=[];
mode = 'Observable';

item: Item;
@Output() clicked = new EventEmitter<Item>();
 constructor () { 

    this.item=new Item("Mobile","1000","Mobile","USD","1");
  }

  ngOnInit() {
   }
 
onClicked() {
  this.clicked.emit(this.item);
   //this.electronicsService.create(this.item)
   //                  .subscribe(
   //                    items  => this.items.push(this.item),
   //                    error =>  this.errorMessage = <any>error);
}
}
