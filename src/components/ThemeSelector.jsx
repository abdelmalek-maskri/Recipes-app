import React from 'react'
import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme';
import Icon from '../assets/icon.svg'

const colors =['#fff', '#EEF36A', '#999'];

export default function ThemeSelector() {

    const {changeColor, changeMode, mode} = useTheme();

    function toggleMode(){
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }

  return (
    <div className='theme-selector'>
        <div className='mode-toggle'>
            <img 
            src={Icon}
            onClick={toggleMode}
            alt='dark light mode'
            style={{filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
            />
        </div>
        <div className='theme-buttons'>
            {colors.map(color => (
                <div 
                key={color}
                onClick={()=> changeColor(color)}
                style={{background:  color}}
                />
            ))}
        </div>
      
    </div>
  )
}
