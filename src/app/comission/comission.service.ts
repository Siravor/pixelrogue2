import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComissionService {

  emitvalue = new EventEmitter<boolean>();

   value: boolean;

  teste() {
    this.value = true;
    console.log(this.value);
    this.emitvalue.emit(this.value);
  }

  getValue() {
    return this.value;
  }

  constructor() {
    console.log('comissionService');
  }
}
