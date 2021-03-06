import React, { useContext } from "react";
import { RecipeContext } from "./App";
import IngredientsList from "./IngredientsList";


const Recipe = (props) => {
  const { handleRecipeDelete} = useContext(RecipeContext);

  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients,
  } = props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h1 className="recipe__title">{name}</h1>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger" onClick={() => handleRecipeDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions: </span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label ">Ingredients: </span>
        <div className="recipe__value recipe__value--indented">
          <IngredientsList key={ingredients.id} ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
