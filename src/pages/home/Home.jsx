import './Home.css'
import React, { useEffect, useState } from 'react'
import {useFetch} from '../../hooks/useFetch'
import 'ldrs/ring'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'

export default function Home() {
  // const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')

  const [data,setData]  = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const unsbscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if(snapshot.empty){
        setError("No recipes to load")
        setIsLoading(false)
      }else{
        let result =[];
        snapshot.docs.forEach((recipe) => {
          result.push({...recipe.data(), id: recipe.id});
          setData(result)
          setIsLoading(false);
        })
      }
    }, (error) => {
      setError(error.message) 
      setIsLoading(false)
    })

    return () => unsbscribe();
  }, [])


  return (
    <div className='home'>
      {error && (
        <div className='loading-container'>
          {error}
        </div>
      )}
      {isLoading && (
        <div className='loading-container'>
          <l-ring className='loading' size="80" stroke="7" bg-opacity="0" speed="2" color="black"></l-ring>
        </div>
      )}
      {data && <RecipeList recipes={ data }/>}
    </div>
  )
}
