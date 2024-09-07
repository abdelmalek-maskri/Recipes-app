import { useParams } from 'react-router-dom'
import './Recipe.css'
import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import 'ldrs/ring'


export default function Recipe() {
  const { id } = useParams();
  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes/' + id)
  return (
    <div className='recipe'>
      {error && (<div className='error'>{error}</div>)}
      {isLoading && (<l-ring className='loading' size="40" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring>)}
      {data && (
        <>
          <h1 className='page-title'>{data.title}</h1>
          <p>Takes {data.cookingTime} to cook</p>
          <ul>
            {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{data.method}</p>

        </>
      )}
    </div>
  )
}
