import { Component } from '@angular/core';
import {Router,NavigationEnd,NavigationStart,NavigationError} from '@angular/router';
import { CliUtils } from './shared/utils/cliutils';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  defaultSelectedMenu:string ="Git";
  selectedMenu:string ="Git";
  menuItem:Array<MenuItem> = new Array(
    new MenuItem("git","Git"),
    new MenuItem("linux","Linux"),
    new MenuItem("info","Contact Us"),
    new MenuItem("info/sitemap","Site Map")
  );

  constructor(private router: Router){
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

  
}

class MenuItem {
      action:string;
      label:string;
      constructor(action:string,label:string){
        this.label = label;
        this.action = action;
      }
}
