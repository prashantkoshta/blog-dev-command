import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-pagestatus404',
  templateUrl: './pagestatus404.component.html',
  styleUrls: ['./pagestatus404.component.css']
})
export class Pagestatus404Component implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle( "Contact Us" );
  }

  ngOnInit() {
  }

}
