import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apel', 5),
    new IngredientModel('Tomat', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddedIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
