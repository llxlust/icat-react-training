import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import PokemonApp from './components/pokemon-app/pokemon-app'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonApp/>
  </React.StrictMode>,
)
