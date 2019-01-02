import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUm = {
    name: 'Pixel art Azathoth - Timelapse',
    link: 'https://www.youtube.com/embed/Yy9mSI8h7w4'
  };

  constructor() { }

  ngOnInit() {
  }

}
