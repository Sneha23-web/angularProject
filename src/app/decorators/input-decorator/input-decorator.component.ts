import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.scss']
})
export class InputDecoratorComponent implements OnInit {
  @Input() item: any; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
