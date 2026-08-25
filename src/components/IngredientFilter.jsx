import React, { useState } from "react";

const IngredientFilter = ({selectedIngredients, allIngredientNames, toggleIngredient}) => {
    
  const [searchText, setSearchText] = useState('')
  
const suggestions = searchText
  ? allIngredientNames
      .filter(name =>
        name.toLowerCase().includes(searchText.toLowerCase()) &&
        !selectedIngredients.includes(name)
      )
      .slice(0, 5)
  : [];

  function handleSelect(name) {
    toggleIngredient(name);
    setSearchText("")
  }

    return <div className="ingredient-filter">
      <label>Add Ingredient</label>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <div className="ingredient-suggestions">{suggestions.map(name => (
        <div className= "suggestion" key= {name} onClick={ () => handleSelect(name)}>
          {name}

        </div>
      ))}</div>

      <div>
        <h3>Selected Ingredients</h3>
        {selectedIngredients.map(name => (
          <span className="chip" key={name}>
            {name}
            <button type="button" onClick={() => toggleIngredient(name)}>×</button>
          </span>
))}</div>

    </div>
}

export default IngredientFilter