import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<IngredientModel[]>();

    private ingredients: IngredientModel[] = [
        new IngredientModel('Apel', 5),
        new IngredientModel('Tomat', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModel[]) {
        // Cara 1
        // for (ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Cara 2
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
