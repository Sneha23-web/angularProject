import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Confirmable } from '../decorators/confirmable.decorators';

@Component({
  selector: 'app-js-practice',
  templateUrl: './js-practice.component.html',
  styleUrls: ['./js-practice.component.scss']
})
export class JsPracticeComponent implements OnInit {
  lowestVal:any;
  highestVal:any;
  asendingVal:any;
  desendingVal:any;
  spliceVal:any;
  sliceVal:any;
  textVal:any;
  valueOfarr:any = [];
  lengthZero:boolean = false;
  constructor() { }

  ngOnInit(): void {
    // this.slice();
    // this.sort();
    // this.splice();
    // this.forEach();
    this.observble();
    
  }
//  Sort Method
sort(){
  const points = [40, 100, 1, 5, 25, 10];
   // for lowest value
   points.sort(function(a,b){
    return a-b
  });
   this.lowestVal = points[0];

   // for highest value
  points.sort(function(a,b){return b-a});
  this.highestVal = points[0];

  // for asending sort
    points.sort(function(a,b){return a-b});
    this.asendingVal = points;

  // for desending sort
    this.desendingSort()
  
}

desendingSort(){
   const points = [40, 100, 1, 5, 25, 10];
   points.sort(function(a,b){return b-a});
   this.desendingVal = points;
}
splice(){
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(0,0,'lemon','kiwi');
  this.spliceVal = fruits;
}
forEach(){
  var text = ""
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  this.valueOfarr = fruits;
  fruits.forEach(function getRepetedFunCall(item,index){
    text += index + ": " + item + ", "
  })
  this.textVal = text;
}
@Confirmable()
deleteItem(): void {
  //Code to delete your item
  let remarr = [];
  let removedval = this.valueOfarr.pop();
   remarr = this.valueOfarr;
   let length =  remarr.length;
  if(length < 1){
    this.lengthZero = true;
    console.log('All items has been deleted successfully!');
  }
  console.log('array values',remarr);
  console.log('item deleted - ',removedval);
  console.log('now the length of an array is',length);
}
slice(){
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  // this.sliceVal = fruits.slice(-3, -1); 
  this.sliceVal = fruits.slice(1,4);
}
observble(){
// let observable = new Observable<number>(ele =>ele.next(123));

//   observable.subscribe(result => {
//     let first_subscriber_observable;
//     first_subscriber_observable = result;
//     console.log(result,'first_subscriber_observable');
//     })

//     observable.subscribe(result => {
//       let second_subscriber_observable;
//       second_subscriber_observable = result;
//       console.log(result,'second_subscriber_observable');
//       })
      this.subjectMethod();
}
subjectMethod(){
  let Subjects = new Subject<number>();
  Subjects.subscribe(result => {
    let first_subscriber_subject;
    first_subscriber_subject = result;
    console.log(result);
   
    })
}
behavierSubject(){
  let behaviorSubject = new BehaviorSubject<number>(45)
  //Behvier subject
  //first subscriber
  behaviorSubject.subscribe(ele => {
    let first_subscriber_behaviorSubject;
    first_subscriber_behaviorSubject = ele
    console.log(`first subscriber ${ele}`)
    })
    behaviorSubject.next(456);
    //secod subscriber
    behaviorSubject.subscribe(ele => {
      let second_subscriber_behaviorSubject;
      second_subscriber_behaviorSubject = ele
      console.log(`second subscriber ${ele}`)
      })
      behaviorSubject.next(567);
}
}
