import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { CarouselComponent } from './welcome/carousel/carousel.component';
import { TopHeaderComponent } from './navigation/top-header/top-header.component';

import { MostRecentPostsComponent } from './welcome/most-recent-posts/most-recent-posts.component';

import { AboutUsComponent } from './welcome/about-us/about-us.component';
import { PopularPostsComponent } from './welcome/popular-posts/popular-posts.component';
import { TopFooterComponent } from './footer/top-footer/top-footer.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { RecentBlogPostsComponent } from './welcome/recent-blog-posts/recent-blog-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    TopHeaderComponent,

    MostRecentPostsComponent,

    AboutUsComponent,
    PopularPostsComponent,
    TopFooterComponent,
    MainFooterComponent,
    RecentBlogPostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
