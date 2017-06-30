import { Injectable } from "@angular/core";
import { User } from "./user.interface";
import { Router } from "@angular/router";
import { toast } from "../../js/toast"
declare var firebase: any;

@Injectable()
export class AuthService{
auth : boolean;
constructor(private router: Router) {}

    signupUser(user: User){
       firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  console.log(error);
    });
}

    loginUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
 console.log(error);
});
    }
    
onLogout()
{
  firebase.auth().signOut();
  this.router.navigate(['/']);
}


isAuthenticated(){
    var user = firebase.auth().currentUser;

if (user) {
  return true;
} else {
  return false;
}
}

getid(){
 
var user = firebase.auth().currentUser;
if (user == null )
{
  return ("test@test.com");
}
else{
  return user.email;
}
}

onadminlogin(user){
  var u=user;
  if( (u.text == "admin123" && (u.password=="test123")) ){
  toast("Admin Logged In",2000);
  this.router.navigate(["/"]);
  this.auth = true;
}
else{
  toast("Admin Login only ALLOWED",2000)
}
}
}