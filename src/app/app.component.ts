import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  menuItem:Array<Object> = new Array(
    {"action":"git","label":"Git"},
    {"action":"linux","label":"Linux"},
    {"action":"info","label":"Contact Us"},
    {"action":"info/sitemap","label":"Site Map"}
  );
  constructor(private router: Router){

  }
  naviagteTo(name){
    this.router.navigate(['/'+name+'']);
  }
}
