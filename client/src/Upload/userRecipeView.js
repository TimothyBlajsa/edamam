export default class userRecipeView {
    constructor(root, {onRecipeSelect, onRecipeAdd, onRecipeEdit, onRecipeDelete} = {}) {
        this.root = root;
        this.onRecipeSelect = onRecipeSelect;
        this.onRecipeAdd = onRecipeAdd;
        this.onRecipeEdit = onRecipeEdit;
        this.onRecipeDelete = onRecipeDelete;
        this.root.innerHTML = `
            <div class='recipes__sidebar'>
                <button class='recipes__add' type='button'>Add Recipe</button>
                <div class='recipes__list'></div>
            </div>
            <div class='recipes__preview'>
                <input class='recipes__title' type='text' placeholder='New Recipe...'>
                <textarea class='recipes__body'>Write Recipe...</textarea>
            </div>
        `;

        const btnAddRecipe = this.root.querySelector('.recipes__add');
        const inpTitle = this.root.querySelector('.recipes__title');
        const inpBody = this.root.querySelector('.recipes__body');

        btnAddRecipe.addEventListener('click', () => {
            this.onRecipeAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener('blur', () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onRecipeEdit(updatedTitle, updatedBody);
            });
        });

        this.updateRecipePreviewVisibility(false);
        
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;
        
        return `
            <div class='recipes__list-item' data-recipe-id'${id}'>
                <div class='recipes__small-title'>${title}</div>
                <div class='recipes__small-body'>
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? '...' : ''}
                </div>
                <div class='recipes__small-updated'>
                    ${updated.toLocalStorage(undefined, { dateStyle: 'full', timeStyle: 'short'})}
                </div>
            </div>
        `;
    }

    updateRecipeList(recipes) {
        const recipesListContainer = this.root.querySelector('.recipes__list');

        //Empty List
        recipesListContainer.innerHTML = '';

        for (const recipe of recipes) {
            const html = this._createListItemHTML(recipe.id, recipe.title, recipe.body, new Date(recipe.updated));

            recipesListContainer.insertedAdjacentHTML('beforeend', html);
        }

        //Add select/delete events for each list item
        recipesListContainer.querySelectorAll('.recipes__list-item').forEach(recipeListItem => {
            recipeListItem.addEventListener('click', () => {
                this.onRecipeSelect(recipeListItem.dataset.recipeID);
            });

            recipeListItem.addEventListener('dblclick', () => {
                // eslint-disable-next-line no-restricted-globals
                const doDelete = confirm('Are you sure you want to delete this Recipe?');

                if (doDelete) {
                    this.onRecipeDelete(recipeListItem.dataset.recipID);
                }
            });
        });
    }

    updateActiveRecipe(recipe) {
        this.root.querySelector('.recipes__title').value = recipe.title;
        this.root.querySelector('.recipes__body').value = recipe.body;

        this.root.querySelectorAll('.recipes__list-item').forEach(recipeListItem => {
            recipeListItem.classList.remove('recipes__list-item--selected');
        });

        this.root.querySelector(`.recipes__list-item[data-recipe-id='${recipe.id}']`).classList.add('recipes__list-item--selected');
    }
    
    updateRecipePreviewVisibility(visible) {
        this.root.querySelector('.recipes__preview').style.visibility = visible ? 'visible' : 'hidden';
    }
}