import { Component, OnInit } from '@angular/core';

import { AuthService } from "../user/auth.service"

import { Router } from "@angular/router";

import { toast } from '../../js/toast';

import { AdminComponent } from '../user/admin.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
isAuth(){
  return this.authService.isAuthenticated();
}
  ngOnInit() {
  }

isAuthadmin(){
  if(this.authService.auth==true)
  return true;
}

openNav() {
     document.getElementById("cat-nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

closeNav() {
     document.getElementById("cat-nav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

logout(){
  this.authService.onLogout();
  this.router.navigate(["/"]);
  toast("Logged Out",2000)
}

Alogout(){
  this.authService.auth = false;
  this.router.navigate(["/"]);
  toast("Admin Logged Out",2000)
}

}
