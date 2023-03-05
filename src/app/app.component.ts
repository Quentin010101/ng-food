import { Component, HostListener } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeLight: boolean = true



  ngOnInit(){

  }

  toggleTheme(){
    this.themeLight = !this.themeLight
    document.body.classList.toggle("dark-theme")
  }

}
