import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  userNameOrPasswordIcorrect = false;
  // login(userName: string, password: any): Observable<any>{
  //   console.log(userName);
  //   console.log(password);
  //   this.isUserLoggedIn = userName == 'admin' && password == 'admin';
  //   localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
  // return of(this.isUserLoggedIn).pipe(
  //   delay(1000),
  //   tap(val => { 
  //      console.log("Is User Authentication is successful: " + val); 
  //   })
  // );
  // }
  
  // logout(): void {
  // this.isUserLoggedIn = false;
  // localStorage.removeItem('isUserLoggedIn'); 
  // }

  loginFun(userName:String,pass:any): Observable<any>{
this.isUserLoggedIn = userName == 'admin' && pass == 'Pass@123';
localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn?'true':'false');
return of(this.isUserLoggedIn).pipe(
  delay(1000),tap(val =>{
    console.log('is user successfully login: ' + val)
  })
);
  }
  constructor() { }
}
