import {EventEmitter} from '@angular/core';

import {Recipe} from './recipes.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe (
      'Chocolate Ice Cream',
      'Super cool Ice cream with chocolate',
      'https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    ),
    new Recipe (
      'Spicy Chicken',
      'Super cool spicy chicken',
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    ),
    new Recipe (
      'Big cheeseburger',
      'Super big cool burger with cheese',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1903&q=80'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
