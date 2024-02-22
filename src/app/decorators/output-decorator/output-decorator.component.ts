import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.scss']
})
export class OutputDecoratorComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  addNewEvent(value: string) {
    this.newEvent.emit(value);
  }
}
