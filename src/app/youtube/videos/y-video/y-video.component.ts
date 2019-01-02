import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-y-video',
  templateUrl: './y-video.component.html',
  styleUrls: ['./y-video.component.css']
})
export class YVideoComponent implements OnInit {

  @Input() videoLink = '';
  @Input() videoName = '';

  constructor() { }

  ngOnInit() {
  }

}
