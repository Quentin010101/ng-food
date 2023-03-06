import { Component } from '@angular/core';
import { Categories } from 'src/app/model/categories.model';
import { CacheService } from 'src/app/service/cache.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: Categories[] = []

  constructor(private _recipeservice: RecipeService, private _cacheservice: CacheService){}

  ngOnInit(){
    if(this._cacheservice.has("categoriesInfo")){
      this.categories = this._cacheservice.get("categoriesInfo")
    }else{
      this.getCategoriesInfo()
    }
  }

  getCategoriesInfo(){
    this._recipeservice.getCategoriesInfo().subscribe({
      next: (data) => {
        this._cacheservice.set("categoriesInfo", data)
        this.categories = data
      }
    })
  }
}
