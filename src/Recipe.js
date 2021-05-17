import React from "react";

const Recipe = (props) => {
  const { name, servings, cookTime, ingredients } = props;

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
        <span>Ingredients: </span>
        <div>{ingredients}</div>
      </div>
    </div>
  );
};

export default Recipe;
