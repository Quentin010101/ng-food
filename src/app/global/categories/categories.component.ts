import { Component } from '@angular/core';
import { Categories } from 'src/app/model/categories.model';
import { CacheService } from 'src/app/service/cache.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Categories[] = []

  constructor(private _recipeservice: RecipeService, private _cacheservice: CacheService){}

  ngOnInit(){
    if(this._cacheservice.has("categories")){
      this.categories = this._cacheservice.get("categories")
    }else{
      this.getCategories()
    }
  }

  getCategories(): void {
    this._recipeservice.getCategories().subscribe({
      next: (data) => {
        this._cacheservice.set("categories", data)
        this.categories = data
      }
    })
  }
}
