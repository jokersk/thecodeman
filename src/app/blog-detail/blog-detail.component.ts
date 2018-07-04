import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { url } from '../url/url';
import * as marked from  'marked';
import { CommentComponent } from '../comment/comment.component';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BlogDetailComponent implements OnInit {
  
  
  constructor( private route: ActivatedRoute, private http:HttpClient,
      private meta:Meta
    ) { }

  test:string
  id:number;
  blog : any;
  ngOnInit() {
    
    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get("id");
        this.http
        .get(`${url}/api/blog/${this.id}`)
        .toPromise()
        .then(data=>{
          
          this.blog = data
          this.blog.content = marked(this.blog.content)
          this.meta.updateTag({name:"keywords",content: this.blog.title });      
        })
        
      })
  }

 




}
