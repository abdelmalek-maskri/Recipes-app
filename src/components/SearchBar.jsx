import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import React, { useState } from 'react'

export default function SearchBar() {

    const [term, setTerm] =useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/search?q=${term}`)
    }

  return (
    <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <label forhtml="search">Search</label>
            <input 
                id='search'
                type='text'
                required
                onChange={(e) => {setTerm(e.target.value)}}
                value={term}
            />
            
      </form>
    </div>
  )
}