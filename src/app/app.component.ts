import { url } from './url/url';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';

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
  hasSend = false;

  constructor(  
    private router:Router ,
    private http:Http,
    private aRoute:ActivatedRoute
  ) { }
  
  saveVisitor(sendUrl){
    
    const headers = new Headers({'Content-Type': 'application/json'});
    const post = { sendUrl : sendUrl}
    this.http.post(`${url}api/saveVisitor`,JSON.stringify(post),{headers:headers})
    .subscribe(res=>{
        
    })
  }

  ngOnInit(){
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(
      (event) => {
          
          if(!this.hasSend && event instanceof NavigationEnd){
            this.saveVisitor(event.url);
            this.hasSend = true;
          }

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
