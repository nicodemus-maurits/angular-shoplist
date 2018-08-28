import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../recipe.model';
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onChooseRecipe() {
      this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
