import { Component, OnInit } from '@angular/core';
import {RecipeService } from '../recipe.service';
import {Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
	
	recipes$: Object;

  constructor(private data: RecipeService) { }

  ngOnInit() {
  	this.data.getAllRecipes()
  	.subscribe(
  		data => this.recipes$ = data
  		
  	)
  }

}
