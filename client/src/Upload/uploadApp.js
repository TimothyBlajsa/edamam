import RecipeView from './userRecipeView';
import RecipeAPI from './userRecipeAPI';

export default class uploadApp {
    constructor(root) {
        this.recipes = [];
        this.activeNote = null;
        this.view = new RecipeView(root, this.handlers());

        this._refreshRecipes();
    }

    _refreshRecipes() {
        const recipes = RecipeAPI.getAllRecipes();

        this._setRecipes(recipes);

        if (recipes.length > 0) {
            this._setActiveRecipe(recipes[0]);
        }
    }

    _setRecipes(recipes) {
        this.recipes = recipes;
        this.view.updateRecipeList(recipes);
        this.view.updateRecipePreviewVisibility(recipes.length > 0);
    }

    _setActiveRecipe(recipe) {
        this.activeRecipe = recipe;
        this.view.updateActiveRecipe(recipe);
    }

    _handlers() {
        return {
            onRecipeSelect: recipeID => {
                const selectedRecipe = this.recipes.find(recipe => recipe.id === recipeID);
                this._setActiveRecipe(selectedRecipe);
            },
            onRecipeAdd: () => {
                const newRecipe = {
                    title: "Title",
                    body: "Body...",
                };

                RecipeAPI.saveRecipe(newRecipe);
                this._refreshRecipes();
            },
            onRecipeDelte: recipeID => {
                RecipeAPI.deleteRecipe(recipeID);
                this._refreshRecipes();
            },
        };
    }
}