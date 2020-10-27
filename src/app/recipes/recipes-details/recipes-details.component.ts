import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  isButtonClicked = false;

  openManageRecipe() {
    this.isButtonClicked = !this.isButtonClicked;
  }

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
  }

}
