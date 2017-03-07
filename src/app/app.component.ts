import { Component } from '@angular/core';
import {Test} from './testgit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! Yeaaaaaaaaaaaaaaaaaaah';
  test = Test;
  
}
