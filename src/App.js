import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import Recipe from "./Recipe";
import "./App.css";

require("dotenv").config();

/*NOTES
ADD ENVRONMENT TOOLS TO PROTECT APPID AND APP KEY
*/

function App() {
  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    // By moving this function inside the effect, we can clearly see the values it uses.

    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      );
      const data = await response.json();
      setrecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };

  const getSearch = (e) => {
    console.log(e);
    e.preventDefault(); //stops the page refresh for the form
    setQuery(search);
    setsearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
        {recipes.map((item, index) => (
          <Recipe
            key={index}
            title={item.recipe.label}
            calories={item.recipe.calories}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
