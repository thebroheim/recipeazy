import React from "react"

const RecipeCard = ({recipe}) => {
    return (
    <div className ="recipe-card">
        <h3>{recipe.title}</h3>
        <p>Match: {Math.round(recipe.score * 100)}%</p>
        <p>Prep: {recipe.prepTime}</p>
        <p>Cook: {recipe.cookTime}</p>
        <h4>Ingredients</h4>
        <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name} : {ingredient.quantity} {ingredient.unit} - {ingredient.notes}</li>
            ))}

        </ul>
        <div className = "recipe-steps">
            <h4>Instructions</h4>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}

            </ol>
        </div>

    </div>
)

}



export default RecipeCard