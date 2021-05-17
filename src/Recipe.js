import React from "react";
import IngredientsList from "./IngredientsList";

const Recipe = (props) => {
  const { name, servings, cookTime, instructions, ingredients } = props;

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time: </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings: </span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions: </span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients: </span>
        <div>
          <IngredientsList key={ingredients.id} ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
