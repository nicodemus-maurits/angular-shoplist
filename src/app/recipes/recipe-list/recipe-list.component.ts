import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Resep test', 'Ini adalah resep test', 'https://picsum.photos/960/720'),
    new RecipeModel('Resep test', 'Ini adalah resep test', 'https://picsum.photos/960/720'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
