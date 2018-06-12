import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient ) { }

  getRecentBlogRecipes(){
  	return this.http.get('http://localhost:8000/api/recipes/recent');
  }

  getBlogRecipe(recipeId){
  	return this.http.get('http://localhost:8000/api/recipe/'+recipeId);
  }

  getAllRecipes(){
  	return this.http.get('http://localhost:8000/api/recipes/all');
  }
}
