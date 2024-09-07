import React from 'react'
import  './RecipeList.css'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {

  if(recipes.length === 0){
    return (
      <div className='error'>No recipe to load...</div>
    )
  }

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div className='card' key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Takes {recipe.cookingTime} to cook</p>
            <div>
            {recipe.method.substring(0, 100)}...
            </div>
            <Link to={`recipes/${recipe.id}`}>
                <p>Cook this</p>
            </Link>
        </div>
      ))}
    </div>
  )
}
