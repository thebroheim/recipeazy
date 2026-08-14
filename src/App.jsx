import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeCard from './components/RecipeCard'
import NewRecipeForm from './components/NewRecipeForm'
import initialRecipes from './data/recipes'

function App() {

  const [recipes, setRecipes] = useState(initialRecipes)

  function addRecipe(newRecipe) {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  }

  return (
    <div>
      <div className= "new-recipe-form">
        <NewRecipeForm onAddRecipe = {addRecipe}/>
      </div>
      <div className="recipe-grid">
        {recipes.map((item) => (
          <RecipeCard
            key={item.id}
            recipe={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App
