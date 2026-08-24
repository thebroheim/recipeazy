import React from "react";

const IngredientFilter = ({selectedIngredients, allIngredientNames, toggleIngredient}) => {
    
    return <div>
      {allIngredientNames.map(name => (
        <label key={name}>
          <input
            type="checkbox"
            checked={selectedIngredients.includes(name)}
            onChange={() => toggleIngredient(name)}
          />
          {name}
        </label>
      ))}
    </div>
}

export default IngredientFilter