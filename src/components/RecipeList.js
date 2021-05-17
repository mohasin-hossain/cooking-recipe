import React from "react";
import Recipe from "./Recipe";

const RecipeList = (props) => {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} handleRecipeDelete={handleRecipeDelete} />;
        })}
      </div>
      <div className="recipe-list__add-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
