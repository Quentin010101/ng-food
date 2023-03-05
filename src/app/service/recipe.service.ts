import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, concat, toArray, mergeMap, switchMap, from } from 'rxjs';
import { Environnement } from 'src/environnement/environnement';
import { Categories } from '../model/categories.model';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiUrl: string = Environnement.apiURL

  constructor(private http: HttpClient) { }

  // Get 20 random recipes
  getRandomRecipes(): Observable<Recipe[]>{
    const requests = [];

    for (let i = 0; i < 10; i++) {
      requests.push(this.http.get<any>(this.apiUrl + '/random.php'));
    }
    return concat(... requests).pipe(
      map((data) => {
        let recipe = new Recipe()

        recipe = data.meals[0]
        recipe.ingredients = []
        recipe.measures = []

        for(let prop in data.meals[0]){
          if(prop.includes("strIngredient")){
            recipe.ingredients.push(data.meals[0][prop])
          }
          if(prop.includes("strMeasure")){
            recipe.measures.push(data.meals[0][prop])
          }
        }
        return recipe
      }),
      toArray()
    )
  }

  getRecipeById(id: string): Observable<Recipe>{
    return this.http.get<any>(this.apiUrl + '/lookup.php?i=' + id).pipe(
      map((data) => {
        let recipe = new Recipe()

        recipe = data.meals[0]
        recipe.ingredients = []
        recipe.measures = []

        for(let prop in data.meals[0]){
          if(prop.includes("strIngredient")){
            recipe.ingredients.push(data.meals[0][prop])
          }
          if(prop.includes("strMeasure")){
            recipe.measures.push(data.meals[0][prop])
          }
        }
        return recipe
      })
    )
  }
  getRecipeByCategory(category: string): Observable<Recipe[]>{
    return this.http.get<any>(this.apiUrl + '/filter.php?c=' + category).pipe(
      map((data) => {
        const requests = []
        for(let i = 0 ; i < data.meals.length; i++){
          requests.push(data.meals[i].idMeal);
        }
        return requests
      }),
      switchMap(ids => from(ids).pipe(
        mergeMap(id => {
          return this.http.get<any>(this.apiUrl + '/lookup.php?i=' + id)
        }),
        map(data => {
          let recipe = new Recipe()

          recipe = data.meals[0]
          recipe.ingredients = []
          recipe.measures = []

          for(let prop in data.meals[0]){
            if(prop.includes("strIngredient")){
              recipe.ingredients.push(data.meals[0][prop])
            }
            if(prop.includes("strMeasure")){
              recipe.measures.push(data.meals[0][prop])
            }
          }
          return recipe
        }),
        toArray()
      ))
    )
  }
  // Get all categories
  getCategories(): Observable<Categories[]>{
    return this.http.get<any>(this.apiUrl + '/list.php?c=list').pipe(
      map((data) => data.meals)
    )
  }
}
