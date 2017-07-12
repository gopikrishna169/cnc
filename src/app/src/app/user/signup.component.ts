import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'

import { AuthService } from "./auth.service"

import { Router } from "@angular/router";

import { toast } from '../../js/toast'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  error="false";
  errorMessage= '';

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) { }

onSignup(){
  this.authService.signupUser(this.myForm.value);
 this.router.navigate(["/"]);
  toast("Logged In",2000)
}

  ngOnInit(): any { 
    this.myForm= this.fb.group({
      email: ['',Validators.required],
      password : ['', Validators.required],
      confirmpassword: ['', Validators.required],
    
      });
  }


}
