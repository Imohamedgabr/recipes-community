import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { CarouselComponent } from './welcome/carousel/carousel.component';
import { TopHeaderComponent } from './navigation/top-header/top-header.component';

import { AboutUsComponent } from './welcome/about-us/about-us.component';
import { PopularRecipesComponent } from './welcome/popular-recipes/popular-recipes.component';
import { TopFooterComponent } from './footer/top-footer/top-footer.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { RecentBlogRecipesComponent } from './welcome/recent-blog-recipes/recent-blog-recipes.component';
import { ArchiveComponent } from './archive/archive.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { NgxPaginationModule } from 'ngx-pagination';

import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    TopHeaderComponent,

    AboutUsComponent,
    PopularRecipesComponent,
    TopFooterComponent,
    MainFooterComponent,
    RecentBlogRecipesComponent,
    ArchiveComponent,
    MyRecipesComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent,
    ViewRecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
