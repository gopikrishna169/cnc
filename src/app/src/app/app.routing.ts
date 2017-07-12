import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./header/header.component";

import { ElectronicsDisplayComponent } from "./items/electronics/electronics-display.component";

import { ClothingsDisplayComponent } from "./items/clothings/clothings-display.component";

import { LoginComponent } from "./user/login.component";

import { SignupComponent } from "./user/signup.component";

import { ElectronicsComponent } from "./items/electronics/electronics.component";

import { ClothingsComponent } from "./items/clothings/clothings.component";

import { CartComponent } from "./cart/cart.component";

import { AuthGuard } from "./user/auth.guard";

import { AdminComponent } from "./user/admin.component";

import { ElectronicsListComponent } from "./items/electronics/electronics-list.component"




const APP_ROUTES: Routes = [
 
    {path: 'Electronics', component: ElectronicsDisplayComponent } ,
    {path: 'Clothings', component: ClothingsDisplayComponent},   
    {path: 'Login', component: LoginComponent},
    {path: 'Signup', component: SignupComponent},
    {path: 'ElectronicsComponent', component: ElectronicsComponent},
    {path: 'ClothingsComponent', component: ClothingsComponent},
    {path: 'Cart', component: CartComponent, canActivate: [AuthGuard]},
    {path: 'Admin', component: AdminComponent},
    
];


export const routing = RouterModule.forRoot(APP_ROUTES);
