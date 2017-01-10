import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle( "Git" );
  }

  ngOnInit() {
  }

}
