import React from "react"
import { useState } from 'react';

const RecipeForm = ({onAddRecipe, allIngredientNames}) => {

const unitsOfMeasurement = [
  "Cup","Piece", "Gram", "tbsp", "tsp"
]

const [formData, setFormData] = useState({
  title: "",
  prepTime: "",
  cookTime: "",
  ingredients: [{ name: '', quantity: '', unit: '', notes:'' },],
  instructions: [""]
});

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

function handleIngredientsChange(index, field, value){
  setFormData(prev => {
    const updatedIngredients = [...prev.ingredients];
    updatedIngredients[index] = {...updatedIngredients[index], [field]: value};
    return { ...prev, ingredients: updatedIngredients };
  });
}

function handleAddIngredient(){
    setFormData(prev => {
        return {...prev, ingredients: [...prev.ingredients, { name: '', quantity: '', unit: '', notes:'' }]};
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
    ingredients: [{ name: '', quantity: '', unit: '', notes:'' }],
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
        <datalist id="ingredient-names">
          {allIngredientNames.map(name => {
            return <option key={name} value={name}/>
          })}
        </datalist>
        <datalist id="units">
          {unitsOfMeasurement.map(name => {
            return <option key={name} value={name}/>
          })}
        </datalist>
                {formData.ingredients.map((ingredient, index)=>{
            return <div className="ingredients-input" key={index}>
            
            <input list="ingredient-names" name="ingredients" placeholder= "name" value={ingredient.name} onChange = {(e) => handleIngredientsChange(index, "name",e.target.value)} type="text"/>
            <input name="ingredients" placeholder= "quantity" value={ingredient.quantity} onChange = {(e) => handleIngredientsChange(index, "quantity", e.target.value)} type="text"/>
            <input list= "units" name="ingredients" placeholder= "unit" value={ingredient.unit} onChange = {(e) => handleIngredientsChange(index, "unit", e.target.value)} type="text"/>
            <input name="ingredients" placeholder= "notes" value={ingredient.notes} onChange = {(e) => handleIngredientsChange(index, "notes", e.target.value)} type="text"/>
            </div>
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