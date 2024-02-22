import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StepOneComponent } from './home/step-one/step-one.component';
import { StepTwoComponent } from './home/step-two/step-two.component';
import { StepThreeComponent } from './home/step-three/step-three.component';
import { StepFourComponent } from './home/step-four/step-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'
import { FormsModule } from '@angular/forms';
import { DecoratorsComponent } from './decorators/decorators.component';
import { InputDecoratorComponent } from './decorators/input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './decorators/output-decorator/output-decorator.component';
import { BothDecoratorComponent } from './decorators/both-decorator/both-decorator.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JsPracticeComponent } from './js-practice/js-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    DecoratorsComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    BothDecoratorComponent,
    LoginPageComponent,
    JsPracticeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
