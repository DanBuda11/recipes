import React, { useState } from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';

export default function Home() {
  const [recipes, setRecipes] = useState(Recipes);
  const [course, setCourse] = useState('all');

  const courseFilter = () => {
    const select = document.getElementById('courseFilter');
    if (select.value === 'all') {
      setRecipes(Recipes);
      setCourse('all');
    } else {
      const filteredCourses = Recipes.filter((recipe, i) => {
        if (recipe.course === select.value) {
          return true;
        }
        return false;
      });
      setRecipes(filteredCourses);
      setCourse(select.value);
    }
  };

  const sortedRecipes = recipes
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((recipe, i) => (
      <RecipeThumb
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        name={recipe.name}
        course={recipe.course}
      />
    ));

  return (
    <div className="gridContainer">
      <div className="courseFilterDiv">
        <label htmlFor="courseFilter">Search by course:</label>
        <select id="courseFilter" onChange={courseFilter}>
          <option value="all">Show All</option>
          <option value="air fryer">Air Fryer</option>
          <option value="appetizers">Appetizers</option>
          <option value="baking">Baking</option>
          <option value="beverages">Beverages</option>
          <option value="breakfasts">Breakfasts</option>
          <option value="crockpot">Crockpot</option>
          <option value="desserts">Desserts</option>
          <option value="dressings">Dressings</option>
          <option value="entree">Entrees</option>
          <option value="instantpot">Instant Pot</option>
          <option value="pickles">Pickles</option>
          <option value="salads">Salads</option>
          <option value="sauces">Sauces</option>
          <option value="seasonings">Seasonings</option>
          <option value="sides">Sides</option>
          <option value="smoothies">Smoothies</option>
          <option value="soups">Soups</option>
          <option value="veggies">Veggies</option>
        </select>
      </div>
      <div className="grid">{sortedRecipes}</div>
    </div>
  );
}
