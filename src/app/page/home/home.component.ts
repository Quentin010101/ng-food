import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { CacheService } from 'src/app/service/cache.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  recipes: Recipe[] = []

  constructor(private _recipeservice: RecipeService, private _cacheservice: CacheService){}

  ngOnInit(){
    if(this._cacheservice.has("randomRecipes")){
      this.recipes = this._cacheservice.get("randomRecipes")
    } else {
      this.getRandomRecipes()
    }
  }

  getRandomRecipes(){
    this._recipeservice.getRandomRecipes().subscribe({
      next: (data) => {
        this._cacheservice.set("randomRecipes", data)
        this.recipes = data
      }
    });
  }
}
