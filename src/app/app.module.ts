import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommentComponent } from './comment/comment.component';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: "blogs", component : BlogListComponent},
  { path: "blog/:id", component : BlogDetailComponent},
  

];


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HomeComponent,
    BlogDetailComponent,
    CommentComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
