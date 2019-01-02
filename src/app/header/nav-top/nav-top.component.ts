import { Component, OnInit, } from '@angular/core';
import { ComissionService } from '../../comission/comission.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  value: boolean;
  colorHome = 'blue-gray';
  colorYouT = 'blue-gray';
  colorCom = 'blue-gray';
  light = 'lighten-2';
  pulse = false;

  teste = false;

  constructor(private comissionService: ComissionService) {
   // this.comissionService = _comissionService;
  }

  onTeste1() {
    this.colorHome = 'deep-purple';
    this.pulse = true;
  }

  onBlur1() {
    this.colorHome = 'blue-grey';
    this.pulse = false;
  }

  onTeste2() {
    this.colorYouT = 'deep-purple';
    this.pulse = true;
  }

  onBlur2() {
    this.colorYouT = 'blue-grey';
    this.pulse = false;
  }

  onTeste3() {
    this.colorCom = 'deep-purple';
  }

  onBlur3() {
    this.colorCom = 'blue-grey';
    this.pulse = false;
  }


  onClick() {
    this.value = !this.value;
  }

  log() {

  }
  ngOnInit() {
    this.comissionService.emitvalue.subscribe(value => this.value = value);
    this.onBlur1();
    this.onBlur2();
    this.onBlur3();
  }

}
