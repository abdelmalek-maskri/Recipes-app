import React from 'react'
import  './RecipeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import TrashCan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes }) {

  const { mode , color } = useTheme()

  if(recipes.length === 0){
    return (
      <div className='error'>No recipe to load...</div>
    )
  }

  function handleClick(id) {
    projectFirestore.collection('recipes').doc(id).delete();
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
            <img
              className='delete'
              src={TrashCan}
              alt='delete'
              onClick={() => {handleClick(recipe.id)}}
            />
        </div>
      ))}
    </div>
  )
}
