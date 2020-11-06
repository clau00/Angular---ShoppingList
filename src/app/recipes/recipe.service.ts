import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService{
  onRecipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      'Pumpkin Pad Thai',
      'Test Description 1',
      'https://static01.nyt.com/images/2020/02/10/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
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

  getRecipeById(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.onRecipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.onRecipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.onRecipesChanged.next(this.recipes.slice());
  }
}
