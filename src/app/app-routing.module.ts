import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {BlogComponent} from './blog/blog.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
	{path: '' , component: WelcomeComponent },
	{path: 'blog' , component: BlogComponent },
	{path: 'my-recipes' , component: MyRecipesComponent },
	{path: 'view/:id' , component: ViewRecipeComponent },
	{path: 'signin' , component: SigninComponent },
	{path: 'signup' , component: SignupComponent },

 ];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}