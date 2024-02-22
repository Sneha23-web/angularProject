import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-both-decorator',
  templateUrl: './both-decorator.component.html',
  styleUrls: ['./both-decorator.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class BothDecoratorComponent implements OnInit {
  @Input() item: any; // decorate the property with @Input()
  @Input() titl:any;
  @Output() newEvent = new EventEmitter<string>();
  clearFruit:any;
  canSave: any;
  isUnchanged: any;
  isSpecial: any;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.subscriber$.subscribe(data => {
      console.log(data);
      console.log('oberserver work');
    });
  }

  addNewEvent(value: string) {
    this.newEvent.emit(value);
    if(this.appService.varTrue == true){
      this.clearFruit = '';
    }else{
      alert('appservice vartrue variable is false');
    }
   
  }

}

function deleteItem() {
  throw new Error('Function not implemented.');
}
 