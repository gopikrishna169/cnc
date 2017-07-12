import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'

import { AuthService } from "./auth.service";

import { Router } from "@angular/router";

import { toast } from '../../js/toast'

declare var firebase: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm: FormGroup;
  error="false";
  errorMessage= '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

onLogin(){
  this.authService.loginUser(this.myForm.value);
  if(this.authService.isAuthenticated()== true){
  toast("Logged In",2000);
  this.router.navigate(["/"]);
}
else{
  toast("Email or Password Invalid",2000)
}
}
  ngOnInit(): any { 
    this.myForm= this.fb.group({
      email: ['',Validators.required],
      password : ['', Validators.required],
     
    
      });
  }



}
