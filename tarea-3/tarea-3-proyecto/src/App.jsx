
import './App.css'
import React from 'react';
import { Details } from './components/Details/Detailscomponets'
import { Imagen } from './components/Imagen/Imagencomponents'
import { Titulo } from './components/Titulo/Titulocomponents'

function App() {
  return (
    <div  className= 'card'>
      <Imagen />
      <Titulo name = 'Batman'/>
      <Details descripcion = 'Heroe de la infancia' />
      </div>
  )
}

export default App
