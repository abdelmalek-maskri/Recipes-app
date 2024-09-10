import { useParams } from 'react-router-dom'
import './Recipe.css'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import 'ldrs/ring'
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme()

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()  => {
    setIsLoading(true);
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if(!doc.exists){
        setError('Could not find that recipe')
        setIsLoading(false);
      }else{
        setData(doc.data());
        setIsLoading(false);
      }
    })

  }, [id])
  return (
    <div className={`recipe ${mode}`}>
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
