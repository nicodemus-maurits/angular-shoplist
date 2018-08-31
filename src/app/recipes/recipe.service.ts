import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: RecipeModel[] = [
        new RecipeModel(
            'Ketoprak',
            'Mantep coy',
            'https://picsum.photos/960/720',
            [
                new IngredientModel('Kacang', 1),
                new IngredientModel('Bawang putih', 2),
                new IngredientModel('Ketupat', 1),
                new IngredientModel('Tahu', 1),
                new IngredientModel('Toge', 5),
                new IngredientModel('Bihun', 1),
                new IngredientModel('Kecap', 1),
            ]),
        new RecipeModel(
            'Semur Daging',
            'Bikin sendiri gampang',
            'https://picsum.photos/960/720',
            [
                new IngredientModel('Daging', 1),
                new IngredientModel('Bawang putih', 5),
                new IngredientModel('Bawang bombai', 2),
                new IngredientModel('Kentang', 10),
                new IngredientModel('Kecap', 1),
            ]),
    ];

    recipeSelected = new EventEmitter<RecipeModel>();

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: IngredientModel[]) {
        this.slService.addIngredients(ingredients);
    }
}
