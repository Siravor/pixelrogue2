import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComissionService } from '../comission.service';


@Component({
  selector: 'app-comission-order',
  templateUrl: './comission-order.component.html',
  styleUrls: ['./comission-order.component.css']
})
export class ComissionOrderComponent implements  OnInit, OnChanges {

  value: boolean;
  aTrigg = false;
  dTrigg = false;
  @Input() show = false;


  xName: string;
  yName: string;


  subjectEvent() {

    console.log(this.show);
    console.log(this.xName);
    console.log(this.yName);
    if (this.xName === 'rovaris' && this.yName === 'senpai') {
      this.show = true;
    }
  }


  constructor(private comissionService: ComissionService) {

  }

  teste() {
    this.comissionService.teste();
    this.value = this.comissionService.value;
    this.show = !this.show;
  }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {


  }


}
