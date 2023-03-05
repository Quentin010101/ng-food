import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { CacheService } from 'src/app/service/cache.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = []
  recipesCategory!: string | null

  constructor(private _recipeservice: RecipeService, private Route: ActivatedRoute, private _cacheservice: CacheService){}

  ngOnInit(){
    this.recipesCategory = this.Route.snapshot.paramMap.get('category')
    if(this._cacheservice.has("category-" + this.recipesCategory)){
      this.recipes = this._cacheservice.get("category-" + this.recipesCategory)
    }else{
      this.getRecipeByCategory()
    }
  }

  getRecipeByCategory(): void {
    this._recipeservice.getRecipeByCategory(this.recipesCategory as string).subscribe({
      next: (data) => {
        this._cacheservice.set("category-" + this.recipesCategory, data)
        this.recipes = data
      }
    })
  }
}
