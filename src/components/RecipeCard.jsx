import React from "react"

const RecipeCard = ({recipe}) => {
    return (
    <div className ="recipe-card">
        <h3>{recipe.title}</h3>
        <p>Prep: {recipe.prepTime}</p>
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