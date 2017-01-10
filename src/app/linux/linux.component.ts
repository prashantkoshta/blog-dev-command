import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle( "Linux" );
  }

  ngOnInit() {
  }

}
