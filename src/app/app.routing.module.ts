import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { RecipeComponent } from './page/recipe-detail/recipe.component';
import { RecipeListComponent } from './page/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recipe/category' , component: CategoryComponent },
  { path: 'recipe/:category' , component: RecipeListComponent },
  { path: 'recipe/:category/:id' , component: RecipeComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
