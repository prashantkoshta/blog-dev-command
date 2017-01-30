import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,NavigationEnd,NavigationStart,NavigationError } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';
import { CliUtils } from './shared/utils/cliutils';
import {CommunicationService} from './shared/service/communication.service';
import { CommonService } from './shared/service/common.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  title = 'app works!';
  defaultSelectedMenu:string ="Git";
  selectedMenu:string ="Git";
  isLoggedIn:boolean = false;
  menuItem:Array<MenuItem> = new Array(
    new MenuItem("git","Git"),
    new MenuItem("linux","Linux"),
    new MenuItem("info","Contact Us"),
    new MenuItem("info/sitemap","Site Map")
  );

  constructor(private router: Router, private communicationService:CommunicationService,private commonService:CommonService){
    this.selectedMenu = this.defaultSelectedMenu;
    CliUtils.ga = ga;
    this.actionOnRouting();
  }

  private actionOnRouting(){
    this.router.events.subscribe((event) => {
      //console.log(event);
      if(event instanceof NavigationEnd){
        var n:MenuItem;
        for(n of this.menuItem){
            if("/"+n.action=== event.urlAfterRedirects){
              this.selectedMenu = n.label;
              CliUtils.setPage(event.urlAfterRedirects);
              break;
            }
        }
      }
    });

    /*if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }*/
  }
  
  naviagteTo(name){
    this.router.navigate(['/'+name+'']);
  }


  ngOnInit(){
   
    this.subscription = this.communicationService.nofityLoginObserable.subscribe(
      (value) =>{
          this.isLoggedIn = value;
      },
      (error)=>{

      });
      
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  logout(){
      this.communicationService.notifyLogin(false);
      this.commonService.logout().subscribe(
        (value) => this.router.navigate(['/login']),
        (error) => this.router.navigate(['/login'])
      );
  }

  
}

class MenuItem {
      action:string;
      label:string;
      constructor(action:string,label:string){
        this.label = label;
        this.action = action;
      }
}
