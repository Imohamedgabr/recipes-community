import { Component, OnInit } from '@angular/core';
import {RecipeService } from '../recipe.service';
import {Observable } from 'rxjs';
import {ActivatedRoute } from '@angular/router';

import {Recipe} from '../recipe.interface';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

	recipe$: Object;

  constructor(private data: RecipeService , private route: ActivatedRoute) {

  	this.route.params.subscribe(params => this.recipe$ = params.id )
   }

  ngOnInit() {
  	this.data.getBlogRecipe(this.recipe$)
  	.subscribe(
  		data => this.recipe$ = data[0]
  		
  	)
  }

}
