import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>
        <strong>Calories:</strong> {calories.toFixed(0)} cal
      </p>
      <img className={style.image} src={image} alt="" />
      <ol>
        {ingredients.map((
          ingredients,
          index //https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
        ) => (
          <li key={index}>{ingredients.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
