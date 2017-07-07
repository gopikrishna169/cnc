import { Injectable } from "@angular/core";

import { LocalStorageService } from 'angular-2-local-storage';

import { Item } from '../items/item';

import { AuthService } from '../user/auth.service';

import { Router } from "@angular/router";

import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

declare var firebase: any;
var database = firebase.database();

@Injectable()
export class CartService{
s= this.authService.getid();
items: Item[] =JSON.parse(localStorage.getItem("s")) || [];
  constructor(private localStorageService: LocalStorageService, private authService: AuthService, private router: Router, private apiService: ApiService ) { }
 
 addtoCart(item1 : Item) {
   { 
             var entry = {
                'name'     : item1.name,
                'cost'     : item1.cost, 
                'costtype' : item1.costtype,       
                'type'     : item1.type, 
                'id'       : item1.id,
            };
  this.items.push(entry);
  var s= this.authService.getid();
  localStorage.setItem( s , JSON.stringify(this.items));
  //return this.apiService.addincart(item1,s);
}
 } 

removefromCart(item1 : Item){
var s= this.authService.getid();
var item = JSON.parse(localStorage.getItem(this.authService.getid()));
if(item != null){
   var object:Item[] = item;
    for (var i = 0; i < item.length; i++) {
        if(object[i].name == item1.name){
           object.splice(i,1);
           break;
       }     
    }
this.router.navigate(["/"]);
item = JSON.stringify(object);
localStorage.setItem( this.authService.getid() ,item);
//return this.apiService.deleteincart(item1.name,s);
 
}
}

addtoelectronics(item1: Item){
var entry = {
                'name'     : item1.name,
                'cost'     : item1.cost, 
                'costtype' : item1.costtype,       
                'type'     : item1.type, 
                'id'       : item1.id,
            };
  this.items.push(entry);
  localStorage.setItem("savedData3", JSON.stringify(this.items));
  //return this.apiService.createinelectronics(item1);
}
addtoclothings(item1: Item){
var entry = {
                'name'     : item1.name,
                'cost'     : item1.cost, 
                'costtype' : item1.costtype,       
                'type'     : item1.type, 
                'id'       : item1.id,
            };
  this.items.push(entry);
  localStorage.setItem("savedData5", JSON.stringify(this.items));
  //return this.apiService.createinelectronics(item1);
}
}