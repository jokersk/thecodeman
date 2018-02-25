import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Http, Headers } from '@angular/http';
import { url } from '../url/url';
import {HttpClient} from "@angular/common/http";
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  
  body : string
  comments : any[] = []
  _boldId : string
 

  constructor(public snackBar: MatSnackBar, private http:Http, private httpC:HttpClient){
   
  }
  
  get blogId():string{
    return this._boldId
  }

  @Input()
  set  blogId(blogId:string){
    
    this._boldId = blogId
    this.http.get(`${url}api/getComments/${blogId}`)
    .subscribe(res=>{
      this.comments = res.json()
    })
  }

  

  openSnackBar() {
    const headers = new Headers({'Content-Type': 'application/json'});
    const post = { blodId: this.blogId, body: this.body}
    this.http.post(`${url}api/postblog`,JSON.stringify(post),{headers:headers})
    .subscribe(res=>{
        this.comments.unshift(post) 
        this.body = ""
        this.snackBar.open("評論成功", "", {
          duration: 2000,
      });
    })
  }

  ngOnInit() {
    
  }

}
