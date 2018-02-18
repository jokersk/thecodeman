import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  
  blogs: any

  constructor( private http:HttpClient ) {

  }

  ngOnInit() {
    
     this.http
    .get("http://localhost:8000/api/blogs-list")
    .toPromise()
    .then(data=>{
      this.blogs = data
    })
    
    
  }

}
