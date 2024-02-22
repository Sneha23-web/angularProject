import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
varTrue:boolean = false;
confirm:boolean = false;
  constructor() { }

  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data: any) {
    this.observer.next(data);
  }
}
