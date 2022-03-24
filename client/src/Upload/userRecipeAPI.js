export default class RecipeAPI {
    static getAllRecipes() {
        const recipes = JSON.parse(localStorage.getItem('recipeapp-recipes') || '[]');

        return recipes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveRecipe(recipeToSave) {
        const recipes = RecipeAPI.getAllRecipes();
        const existing = recipes.find(recipe => recipe.id === recipeToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = recipeToSave.title;
            existing.body = recipeToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            recipeToSave.id = Math.floor(Math.random() * 1000000);
            recipeToSave.updated = new Date().toISOString();
            recipes.push(recipeToSave);
        }

        localStorage.setItem('rcipeapp-recipes', JSON.stringify(recipes));
    }

    static deleteRecipe(id) {
        const recipes = RecipeAPI.getAllRecipes();
        const newRecipes = recipes.filter(recipe => recipe.id !== id);

        localStorage.setItem('recipeapp-recipes', JSON.stringify(newRecipes));
    }
}