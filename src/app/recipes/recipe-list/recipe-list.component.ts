import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() chosenRecipe = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Resep test 1', 'Ini adalah resep test 1', 'https://picsum.photos/960/720'),
    new RecipeModel('Resep test 2', 'Ini adalah resep test 2', 'https://picsum.photos/960/720'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onChosenRecipe(recipe: RecipeModel) {
    this.chosenRecipe.emit(recipe);
  }
}
