import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app';
  showHeader = true;

  constructor(  
    private router:Router 
  ) { }
  
  

  ngOnInit(){
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(
      (event) => {
          
          if(event instanceof NavigationEnd &&   event.url.match(/blog\/\d+/))
          {
            this.showHeader = false;
          }else{
            this.showHeader = true;
          }
          
      }
    )
  }
}
