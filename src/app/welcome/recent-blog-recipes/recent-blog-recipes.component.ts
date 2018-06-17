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
  likes$ : string;
  arr$ : any;
  array$ : number[];

  constructor(private data: RecipeService ) { }

  ngOnInit() {
  	this.data.getRecentBlogRecipes()
  	.subscribe(
  		data => this.recipes$ = data
  	)
  
  // get the userId and the fav recipe so u can mark it down
    this.data.getUserId().subscribe(
      data => {
        this.likes$ = JSON.stringify(data);
        this.arr$ = this.likes$.replace(']', '');
        this.arr$ = this.arr$.replace('[', '');
        this.arr$=  this.arr$.split(',');

        for (var i=0; i<this.arr$.length; i++)
        {
            this.arr$[i] = parseInt(this.arr$[i], 10);
        }
          console.log(this.arr$);
      }
    )
    // console.log(this.likes$.likes);
  }


}
