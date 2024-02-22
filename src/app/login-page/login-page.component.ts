import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userName: any;
  password: any;
  formData:any =  FormGroup ;
  constructor(public authService : AuthService, private router : Router, public appService: AppService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
   });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.loginFun(this.userName, this.password).subscribe( (data: any) => { 
        console.log("Is Login Success: " + data); 
        if(data) {
          this.router.navigate(['app/home']); 
        }else{
          this.authService.userNameOrPasswordIcorrect = true;
         }
    });
 }

}


