import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  video1 = {
    name: 'Pixel art Azathoth - Timelapse',
    link: 'https://www.youtube.com/embed/Yy9mSI8h7w4'
  };
  video2 = {
    name: 'Jon and Alex (WANTED) - Timelapse',
    link: 'https://www.youtube.com/embed/qYTKPFj8UW8'
  };
  video3 = {
    name: 'Earthbound Style - Call of Cthulhu NES Game Mockup (Timelapse)',
    link: 'https://www.youtube.com/embed/whhYoPPDIcQ'
  };
  video4 = {
    name: 'Wrecked car - Timelapse',
    link: 'https://www.youtube.com/embed/DK9y5eyZQvI'
  };

  constructor() { }

  ngOnInit() {
  }

}
