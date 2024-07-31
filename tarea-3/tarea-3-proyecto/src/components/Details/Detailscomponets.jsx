import React from 'react'

export const Details = (props) => {
   console.log(props,'Details');
    return (
    <div>
      <h3>{props.descripcion}</h3>
    </div>
  )
}
