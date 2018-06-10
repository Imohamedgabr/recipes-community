import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {BlogComponent} from './blog/blog.component';
import { FavRecipesComponent } from './fav-recipes/fav-recipes.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
	{path: '' , component: WelcomeComponent },
	{path: 'blog' , component: BlogComponent },
	{path: 'fav-recipes' , component: FavRecipesComponent },
	{path: 'signin' , component: SigninComponent },
	{path: 'signup' , component: SignupComponent },

 ];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}