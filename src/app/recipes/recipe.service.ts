import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pumpkin Pad Thai',
      'Test Description 1',
      ' https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1',
      [
        new Ingredient('Pumpkin', 1),
        new Ingredient('Chicken', 1)
      ]),
    new Recipe(
      'Sauteed Zucchini',
      'Description Test 2',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
      [
        new Ingredient('Zucchini', 1),
        new Ingredient('Beans', 15)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
