import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsouselComponent } from './carsousel.component';
import { ElectronicsComponent } from './items/electronics/electronics.component';
import { ClothingsComponent } from './items/clothings/clothings.component';
import { routing } from "./app.routing";
import { LoginComponent } from './user/login.component';
import { SignupComponent } from './user/signup.component';
import { ElectronicsListComponent } from './items/electronics/electronics-list.component';
import { ClothingsListComponent } from './items/clothings/clothings-list.component';
import { ElectronicsDisplayComponent } from './items/electronics/electronics-display.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthService } from './user/auth.service';
import { AuthGuard } from "./user/auth.guard";
import { CartComponent } from './cart/cart.component'
import { CartService } from './cart/cart.service';
import { ClothingsDisplayComponent } from './items/clothings/clothings-display.component';
import { AdminComponent } from './user/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsouselComponent,
    ElectronicsComponent,
    ClothingsComponent,
    LoginComponent,
    SignupComponent,
    ElectronicsListComponent,
    ClothingsListComponent,
    ElectronicsDisplayComponent,
    CartComponent,
    ClothingsDisplayComponent,
    AdminComponent,
  
    
  ],
  imports: [
    BrowserModule,
     ReactiveFormsModule,
     
    routing,
    FormsModule,
    HttpModule,
    JsonpModule,
     LocalStorageModule.withConfig({
            prefix: 'first-app',
        //  storageType: 'localStorage'
            storageType: 'sessionStorage'
        })
    
  ],
  providers: [AuthService, AuthGuard, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
