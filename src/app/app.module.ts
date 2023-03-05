import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponent } from './global/theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './global/card/card.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HelloComponent } from './page/hello/hello.component';
import { AppRoutingModule } from './app.routing.module';
import { RecipeComponent } from './page/recipe-detail/recipe.component';
import { BreadcrumbComponent } from './global/breadcrumb/breadcrumb.component';
import { SentenceListPipe } from './pipe/sentence-list.pipe';
import { RecipeListComponent } from './page/recipe-list/recipe-list.component';
import { ContainerRecipesComponent } from './global/container-recipes/container-recipes.component';
import { ContainerPagesComponent } from './global/container-pages/container-pages.component';
import { CategoriesComponent } from './global/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    CardComponent,
    HomeComponent,
    HelloComponent,
    RecipeComponent,
    BreadcrumbComponent,
    SentenceListPipe,
    RecipeListComponent,
    ContainerRecipesComponent,
    ContainerPagesComponent,
    CategoriesComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatChipsModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
