import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chiken",
    servings: "3",
    cookTime: "1:45",
    ingredients:
      "1. Put salt on chicken.\n2. Put chicken in oven.\n3. Eat chicken.",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: "2",
    cookTime: "0:45",
    ingredients: "1. Put salt on pork.\n2. Put pork in oven.\n3. Eat pork.",
  },
];

export default App;
