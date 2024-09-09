import { useLocation } from 'react-router-dom'
import './Search.css'

import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import { useTheme } from '../../hooks/useTheme';
export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/recipes?q=${query}` 
  const { error, isPending, data } = useFetch(url)

  // Manual filtering based on query
  const filteredData = data?.filter(recipe => 
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  const {mode} = useTheme();

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={filteredData} />}
    </div>
  )
}
