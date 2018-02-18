import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  
  constructor( private route: ActivatedRoute, private http:HttpClient) { }
  
  id:number;
  blog : any;
  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get("id");
        this.http
        .get(`http://localhost:8000/api/blog/${this.id}`)
        .toPromise()
        .then(data=>{
          this.blog = data
        })
        
      })
  }




}
