import React from "react"
import { useState } from 'react';

const RecipeForm = ({onAddRecipe}) => {

const [formData, setFormData] = useState({
  title: "",
  prepTime: "",
  cookTime: "",
  ingredients: [""],
  instructions: [""]
});

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

function handleIngredientsChange(index, value){
  setFormData(prev => {
    const updatedIngredients = [...prev.ingredients];
    updatedIngredients[index] = value;
    return { ...prev, ingredients: updatedIngredients };
  });
}

function handleAddIngredient(){
    setFormData(prev => {
        return {...prev, ingredients: [...prev.ingredients, ""]};
    });
}

function handleInstructionsChange(index, value){
  setFormData(prev => {
    const updatedSteps = [...prev.instructions];
    updatedSteps[index] = value;
    return { ...prev, instructions: updatedSteps };
  });
}

function handleAddInstruction(){
    setFormData(prev => {
        return {...prev, instructions: [...prev.instructions, ""]};
    });
}

function handleSubmit(e) {
  e.preventDefault();
  onAddRecipe({id: Date.now(), ...formData});
  setFormData({
    title: "",
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    instructions: [""],
    
  }); // clear the input after submit
}

  return <form onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input name="title" value={formData.title} onChange = {handleChange} type="text"/>

        <label>Preparation Time (Mins)</label>
        <input name="prepTime" value={formData.prepTime} onChange = {handleChange} type="text"/>

        <label>Cooking Time (Mins)</label>
        <input name="cookTime" value={formData.cookTime} onChange = {handleChange} type="text"/>

        <label>Ingredients</label>
                {formData.ingredients.map((ingredient, key)=>{
            return <input name="ingredients" key={key} value={ingredient} onChange = {(e) => handleIngredientsChange(key, e.target.value)} type="text"/>
        })}
        <button type= "button" onClick={handleAddIngredient}>Add Ingredient</button>
        

        <label>Instructions</label>
        {formData.instructions.map((instruction, key)=>{
            return <input name="instruction" key={key} value={instruction} onChange = {(e) => handleInstructionsChange(key, e.target.value)} type="text"/>
        })}
        <button type= "button" onClick={handleAddInstruction}>Add Step</button>
        
    
        

        <input type= "submit"/>
    </form>

}

export default RecipeForm