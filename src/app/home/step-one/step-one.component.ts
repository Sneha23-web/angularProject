import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  val:string = '';
  number:Number = 12;
  firstFormGroup:any =  FormGroup;
  valueInvalid:boolean = false;
  constructor(private stepper:MatStepper,private formBuilder: FormBuilder,public authService : AuthService,private router : Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
   
  }
  next(){
if(this.firstFormGroup.valid){
  this.stepper.next();
}
else{
  // alert('Please enter value in input');
  this.valueInvalid = true;
}
  }

  alertMsg(){
      window.alert('This is alert message');
  }
  logout(): void {
    this.authService.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
    this.router.navigate(['']); 
    }
}
