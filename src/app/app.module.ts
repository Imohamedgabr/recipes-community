import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule,NgForm } from '@angular/forms';
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
import { ContainPipe } from './contain.pipe';
import {BooleanPipesModule, CollectionPipesModule, MathPipesModule, ObjectPipesModule, StringPipesModule} from 'ng-pipes';


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
    ViewRecipeComponent,
    ContainPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
        BooleanPipesModule,     // imports all pipes of the boolean module
    CollectionPipesModule,  // imports all pipes of the collection module
    MathPipesModule,        // imports all pipes of the math module
    ObjectPipesModule,      // imports all pipes of the object module
    StringPipesModule       // imports all pipes of the string module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
