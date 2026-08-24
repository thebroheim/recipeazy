import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeCard from './components/RecipeCard'
import NewRecipeForm from './components/NewRecipeForm'
import initialRecipes from './data/recipes'
import IngredientFilter from './components/IngredientFilter'

function App() {

  const [recipes, setRecipes] = useState(initialRecipes)

  const [selectedIngredients, setSelectedIngredients] = useState(["Chicken"])

  const allIngredientNames = useMemo(() => {
    const names = recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.name));
    return [...new Set(names)];
  }, [recipes])

  function toggleIngredient(name) {
    setSelectedIngredients(prev => 
      prev.includes(name) ? prev.filter(i => i !==name)
      : [...prev, name]
    )

  }

  const filteredRecipes = useMemo(() => {
    const selectedSet = new Set(selectedIngredients)

    const scored = recipes.map(recipe => {
      const matchCount = recipe.ingredients.filter(ing => selectedSet.has(ing.name)).length;
      const score = matchCount / recipe.ingredients.length
      return {...recipe, score}
    })

    scored.sort((a, b) => b.score - a.score);
    return scored
  

}, [recipes, selectedIngredients]);

  function addRecipe(newRecipe) {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  }


  return (
    <div>
      <div className= "new-recipe-form">
        <NewRecipeForm onAddRecipe = {addRecipe} allIngredientNames ={allIngredientNames} />
      </div>
      <div className='ingredient-filter'>
        <IngredientFilter allIngredientNames ={allIngredientNames} selectedIngredients ={selectedIngredients} toggleIngredient = {toggleIngredient}/>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map((item) => (
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
