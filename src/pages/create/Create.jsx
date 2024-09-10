import { useNavigate } from 'react-router-dom';
import { useFetch} from '../../hooks/useFetch';
import './Create.css'
import { useTheme } from '../../hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react'
import { projectFirestore } from '../../firebase/config';
export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient]  = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);



  const navigate = useNavigate()



  async function handleSubmit(e){
    e.preventDefault();
    const doc = {title, ingredients, method, cookingTime: cookingTime + " minutes"};
    try{
      await projectFirestore.collection('recipes').add(doc);
      navigate('/');
    }catch(err){
      console.log(err)
    }
  }


  function handleAdd(e){
    e.preventDefault();
    
    const ing = newIngredient.trim();
    if(newIngredient && !ingredients.includes(ing)){
      setIngredients(prev => [...prev, ing]);
      setNewIngredient('');
      ingredientInput.current.focus();
    }
  }

  const { mode } = useTheme()

  return (
    <div className={`create ${mode}`}>
      <h2>Create a new Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter the recipe Name:</span>
          <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='recipe name' required/>
        </label>
        
        <label>
          <span>Enter the cooking time</span>
          <input type='number' onChange={(e) => setCookingTime(e.target.value)}  value={cookingTime} placeholder='how much time' required/>
        </label>

        <label>
          <span>Enter Ingredients:</span>
          <div className='ingredients'>
            <input 
              type='text' 
              onChange={(e) => setNewIngredient(e.target.value)} 
              value={newIngredient}
              ref={ingredientInput}
              placeholder='add an ingredient' 
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>

        <p>Recipe Ingredients: {ingredients.map((ing, i) => <em key={i}>{ing}, </em>)}</p>

        <label>
          <span>Enter the method to cook this recipe</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required placeholder='how to cook it :)'/>
        </label>

        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}
