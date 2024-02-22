import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Test } from '../test.decorators';
import { BothDecoratorComponent } from './both-decorator/both-decorator.component';
// import { sort } from '../pipes/safe-pipe';
import { Confirmable } from './confirmable.decorators';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'],
  // providers:[sort]
})

export class DecoratorsComponent implements OnInit {
  @ViewChild('demo')demo:any;
  user = { name:'Rohit', age: 23};
  dialog: any;
  name: any;
  animal: any;
  constructor(public appService:AppService) { }

  ngOnInit(): void {
  }



  @Test
  deleteItem(): void {
   }
   
   currentStyles = {
    'font-style': 'normal',
    'font-weight':  '600',
    'font-size': '30px',
    'line-height':'normal',
  };

 // Decorators code start for @input decorator
 currentItem = 'Television';
 title = ['Item1', 'Item2'];
 // Decorators code end for @input decorator

  // Decorators code start for @output decorator
 items = ['Item1', 'Item2'];
 fruits = ['Mango','Kiwi'];

 addItem(newItem: string) {
   this.items.push(newItem);
   console.log(this.items);
 }
 addFruit(newFruit:string){
  this.fruits.push(newFruit);
  console.log(this.fruits);
 }
   // Decorators code end for @output decorator

  
}


