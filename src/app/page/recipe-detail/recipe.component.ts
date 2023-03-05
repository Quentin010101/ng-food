import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { CacheService } from 'src/app/service/cache.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipe: Recipe = new Recipe
  displayedColumns: string[] = ['quantities', 'ingredients'];

  constructor(private _recipeservice: RecipeService, private Route: ActivatedRoute, private _cacheservice: CacheService){}

  ngOnInit(){
    let id = this.Route.snapshot.paramMap.get("id")

    if(this._cacheservice.has(id as string)){
      this.recipe = this._cacheservice.get(id as string)
    } else{
      this.getRecipeById(id as string)
    }

  }

  getRecipeById(id: string): void{
    this._recipeservice.getRecipeById(id).subscribe({
      next: (data) => {
        this.recipe = data
        this._cacheservice.set(id, data)
      }
    })
  }
}
