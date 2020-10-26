import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Ingredient } from '../../shared/ingredients.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
