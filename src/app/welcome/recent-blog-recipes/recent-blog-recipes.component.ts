import { Component, OnInit } from '@angular/core';
import {RecipeService } from '../../recipe.service';
import {Observable } from 'rxjs';
import {Recipe} from '../../recipe.interface';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-recent-blog-recipes',
  templateUrl: './recent-blog-recipes.component.html',
  styleUrls: ['./recent-blog-recipes.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 2, transform: 'translateY(-70px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
