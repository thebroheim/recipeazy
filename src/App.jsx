import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import recipes from './data/recipes'
import RecipeCard from './components/RecipeCard'

function App() {
  return (
    <div>
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
