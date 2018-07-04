import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { url } from '../url/url';
import { Meta } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  
  blogs: any[]
  showblogs : any[]
  tags : any[]
  tagUrl : string = url+"api/tagsList";

  constructor( private http:HttpClient, private h:Http, private meta : Meta  ) {

  }

  getTagsList()
  {
    return this.h.get(this.tagUrl)
    .map((res : Response) => res.json())
    .subscribe(res=>this.tags = res.tags)
  }

  getBlogsList()
  {
    return this.h.get(`${url}/api/blogs-list`)
    .map(res=>res.json())
    .subscribe(res=>this.showblogs = this.blogs = res)
  }

  updateMeta()
  {
    this.meta.updateTag({name:"keywords",content:"test"});
  }

  ngOnInit() {
    this.updateMeta()
    this.getTagsList()
    this.getBlogsList()
  }

  filterTags(tagId:string)
  {
    this.showblogs = this.blogs.filter(res=>{
      return res.tags.map(p=>p.id).includes(tagId)
    })
  }
}
