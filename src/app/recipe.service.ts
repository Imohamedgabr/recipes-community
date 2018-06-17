import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import {Recipe} from './recipe.interface';


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


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'X-Requested-With':  'XMLHttpRequest'
  //   })
  // };

  // getUserId(token: string = null ){
  //   return this.http.post('http://localhost:8000/api/getUserId?token='+token,
  //   {
  //     token: token
  //   }, 
  //   this.httpOptions
  //   )
  // }

  getUserId(){
    const token = localStorage.getItem('token');
    var main = 'http://localhost:8000/api/getUserId?token=';
    // had to remove the double quotes"" so u can get the token
    var url = main.concat( token.replace(/['"]+/g, ''));
    // we need to handle the errors
    return this.http.get(url);
  }
}
