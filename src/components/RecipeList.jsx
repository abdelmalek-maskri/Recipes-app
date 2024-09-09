import React from 'react'
import  './RecipeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function RecipeList({ recipes }) {

  const { mode , color } = useTheme()

  if(recipes.length === 0){
    return (
      <div className='error'>No recipe to load...</div>
    )
  }

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div className={`card ${mode}`} key={recipe.id}>
            <h3 style={{color}}>{recipe.title}</h3>
            <p className='cook-time'>Takes {recipe.cookingTime} to cook</p>
            <div>
            {recipe.method.substring(0, 100)}...
            </div>
            <Link to={`recipes/${recipe.id}`}>
                <p className='btn'>Cook this</p>
            </Link>
        </div>
      ))}
    </div>
  )
}
