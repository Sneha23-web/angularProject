import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  stepTwo:any = FormGroup;
  errorMsg:boolean = false;
  minValue:number = 1000;
  errorMsgMax:boolean = false;
  constructor( private formbuilder:FormBuilder,private stepper:MatStepper) { }

  ngOnInit(): void {
    this.stepTwo = this.formbuilder.group({
      steptwoNumber:['',[Validators.min(1000),Validators.max(2000),Validators.required]],
    })
  }
  nextClick(){
if(this.stepTwo.valid){
  this.stepper.next();
}
else if(this.minValue <= 1000){
  this.errorMsg = true;
  }
  else{
    this.errorMsgMax = true;
    }
  }
}
