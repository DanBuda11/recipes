import React from 'react';
import Recipes from './Recipes';
import RecipeThumb from './RecipeThumb';

export default React.createClass({
  getInitialState() {
    return {
      recipes: Recipes,
      course: 'all',
    };
  },

  updateRecipes() {
    this.setState({ recipes: Recipes });
  },

  courseFilter() {
    const select = document.getElementById('courseFilter');
    if (select.value === 'all') {
      this.setState({ recipes: Recipes, course: 'all' });
    } else {
      const filteredCourses = Recipes.filter((recipe, i) => {
        if (recipe.course === select.value) {
          return true;
        }
        return false;
      });
      this.setState({ recipes: filteredCourses, course: select.value });
    }
  },

  render() {
    const recipes = this.state.recipes
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
          <select id="courseFilter" onChange={this.courseFilter}>
            <option value="all">Show All</option>
            <option value="appetizers">Appetizers</option>
            <option value="beverages">Beverages</option>
            <option value="breakfasts">Breakfasts</option>
            <option value="condiments">Condiments</option>
            <option value="crockpot">Crockpot</option>
            <option value="desserts">Desserts</option>
            <option value="dressings">Dressings</option>
            <option value="main">Main Courses</option>
            <option value="salads">Salads</option>
            <option value="sauces">Sauces</option>
            <option value="seasonings">Seasonings</option>
            <option value="sides">Sides</option>
            <option value="smoothies">Smoothies</option>
            <option value="soups">Soups</option>
          </select>
        </div>
        <div className="grid">{recipes}</div>
      </div>
    );
  },
});
