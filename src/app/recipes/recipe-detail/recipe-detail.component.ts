import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  toShoppingList() {
    this.recipeService.onIngredientsToShoppingList(
      this.recipe.ingredients.slice()
    );
  }
}
