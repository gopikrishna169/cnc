import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'

import { AuthService } from "./auth.service";

import { Router } from "@angular/router";

import { toast } from '../../js/toast'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 myForm: FormGroup;
  error="false";
  errorMessage= '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

onALogin(){
 var u= this.myForm.value;
 this.authService.onadminlogin(u); 
}
  ngOnInit(): any { 
    this.myForm= this.fb.group({
      text: ['',Validators.required],
      password : ['', Validators.required],
     
    
      });
  }

}
