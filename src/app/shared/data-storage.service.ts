import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Recipe} from '../recipes/recipes.model';
import {RecipesService} from '../recipes/recipes.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipesService: RecipesService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://recipebook-f0705-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipebook-f0705-default-rtdb.firebaseio.com/recipes.json'
    ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
