import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadsense',
  templateUrl: './gadsense.component.html',
  styleUrls: ['./gadsense.component.scss']
})
export class GadsenseComponent implements OnInit {

  constructor() { 
    setTimeout(()=>{
        try{
          (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        }catch(e){
          console.error("error");
        }
      },2000);
  }

  ngOnInit() {
  }

}
