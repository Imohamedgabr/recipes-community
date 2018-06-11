import { Component, OnInit } from '@angular/core';
import {RecipeService } from '../../recipe.service';
import {Observable } from 'rxjs';
import {Recipe} from '../../recipe.interface';

@Component({
  selector: 'app-recent-blog-recipes',
  templateUrl: './recent-blog-recipes.component.html',
  styleUrls: ['./recent-blog-recipes.component.scss']
})
export class RecentBlogRecipesComponent implements OnInit {

	recipes$: Object;

  constructor(private data: RecipeService ) { }

  ngOnInit() {
  	this.data.getRecentBlogRecipes()
  	.subscribe(
  		data => this.recipes$ = data
  		
  	)
    
  }

}
