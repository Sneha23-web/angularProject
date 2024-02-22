import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BothDecoratorComponent } from './decorators/both-decorator/both-decorator.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { HomeComponent } from './home/home.component';
import { JsPracticeComponent } from './js-practice/js-practice.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
// {path:'', component:DecoratorsComponent},
// {path:'', component:BothDecoratorComponent},
// {path:'', component:JsPracticeComponent},

// {path:'', component:LoginPageComponent},


{path:'', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
