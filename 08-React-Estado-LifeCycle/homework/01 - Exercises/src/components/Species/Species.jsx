import React from 'react'

export default function Species ({ species, handleAllSpecies, handleSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      <div>
        {species.map((especie)=>{
          return(
            <button key={especie} onClick={handleSpecies} value={especie}>{especie}</button>
          )
        })}
        <button onClick={handleAllSpecies} >All Animals</button>
      </div>
    </div>
  )
}
