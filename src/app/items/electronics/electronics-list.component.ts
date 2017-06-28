import { Component, OnInit, Input } from '@angular/core';

import { Item } from "../item";

import { ElectronicsComponent } from "./electronics.component";

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.css']
})
export class ElectronicsListComponent implements OnInit {

item: Item;
id:number =0;
  constructor() {    }

  ngOnInit() {
  }

}
