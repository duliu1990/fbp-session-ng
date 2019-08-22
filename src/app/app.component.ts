import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fbp-session-ng';

  ngOnInit(): void {
    fromEvent(window, 'click').subscribe(res => {
      console.log(res);
    });;
  }
}
