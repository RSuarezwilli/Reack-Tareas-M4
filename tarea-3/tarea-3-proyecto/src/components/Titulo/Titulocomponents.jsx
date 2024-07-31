import React from 'react'


export const Titulo = (props) => {
    console.log(props, 'Titulo');
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}
