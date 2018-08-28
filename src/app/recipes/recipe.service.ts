import {RecipeModel} from './recipe.model';
import {EventEmitter} from "@angular/core";

export class RecipeService {
    private recipes: RecipeModel[] = [
        new RecipeModel('Resep test 1', 'Ini adalah resep test 1', 'https://picsum.photos/960/720'),
        new RecipeModel('Resep test 2', 'Ini adalah resep test 2', 'https://picsum.photos/960/720'),
    ];

    recipeSelected = new EventEmitter<RecipeModel>();

    getRecipes() {
        return this.recipes.slice();
    }
}
