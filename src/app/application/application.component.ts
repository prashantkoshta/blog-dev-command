import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CommonService } from './../shared/service/common.service';

@Component({
  selector: 'application-main',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(private router:Router,private commonService:CommonService) { }

  ngOnInit() {
  }

  
}
