import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private showButton = new BehaviorSubject<boolean>(true);
  currentValue = this.showButton.asObservable();

  constructor() { }

  changeValue(value: boolean) {
    this.showButton.next(value);
  }
}
