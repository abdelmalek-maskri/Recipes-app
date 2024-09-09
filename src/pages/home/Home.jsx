import './Home.css'
import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import 'ldrs/ring'
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && (<div className='error'>{error}</div>)}
      {isLoading && (<l-ring className='loading' size="40" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring>)}
      {data && <RecipeList recipes={ data }/>}
    </div>
  )
}
