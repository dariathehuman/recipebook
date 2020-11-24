import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  isButtonClicked = false;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  openManageRecipe() {
    this.isButtonClicked = !this.isButtonClicked;
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
