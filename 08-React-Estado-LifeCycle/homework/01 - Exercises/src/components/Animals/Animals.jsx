import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super();
  }

  render () {
    return(
       <div>
      {this.props.animals.map((e, index)=> (
        <div key={index}>
          <h5>{e.name}</h5>
          <img 
          src={e.image}
          alt={e.name} 
          width={"300px"}/>
          
          <br/>
          <span>{e.specie}</span>
        </div>
        
        
      ))}
      </div>
    );
  }
}
