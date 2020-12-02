import { Injectable } from '@angular/core';

import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()

export class RecipesService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe [] = [
    new Recipe (
      'Chocolate Ice Cream',
      'Super cool Ice cream with chocolate',
      'https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Chocolate', 2),
        new Ingredient('Nuts', 200),
      ]
    ),
    new Recipe (
      'Spicy Chicken',
      'Super cool spicy chicken',
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Lemons', 1),
        new Ingredient('Potatoes', 6)
      ]
    ),
    new Recipe (
      'Big cheeseburger',
      'Super big cool burger with cheese',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1903&q=80',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Meat', 400),
        new Ingredient('Buns', 2),
        new Ingredient('Cucumbers', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
