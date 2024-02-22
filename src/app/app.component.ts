import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder) {
   }
   ngOnInit(): void {
   
   }
  title = 'Angular Project';

 
}
