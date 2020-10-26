import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipes.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
