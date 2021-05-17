import React from "react";
import Ingredient from './Ingredient'

const IngredientsList = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return (
    <div className="ingredient-grid">
        {ingredientsList}
    </div>
  );
};

export default IngredientsList;
