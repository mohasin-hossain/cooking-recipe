import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { uuid } from "uuidv4";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const response = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (response !== null) setRecipes(JSON.parse(response));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid(),
      name: "RecipeName",
      servings: "1",
      cookTime: "3:45",
      instructions: "Inst.",
      ingredients: [
        {
          id: uuid(),
          name: "random",
          amount: "1 Tbs",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    // const filtered = recipes.filter((recipe) => recipe.id !== id);
    // setRecipes([...filtered]);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: "3",
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken.\n2. Put chicken in oven.\n3. Eat chicken.",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: "2",
    cookTime: "0:45",
    instructions: "1. Put salt on pork.\n2. Put pork in oven.\n3. Eat pork.",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "1 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "1 Tbs",
      },
    ],
  },
];

export default App;
