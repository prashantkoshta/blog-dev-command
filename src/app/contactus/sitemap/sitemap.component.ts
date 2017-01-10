import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle( "Site Map" );
  }

  ngOnInit() {
  }

}
