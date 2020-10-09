import {EventEmitter} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
