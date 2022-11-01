import React from 'react'
import { BakingData } from './BakingData.js'

function ListItem(props) {
  return (
     <li key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.purpose}</p>
    </li>
  );
} 

export function List () {    
  return (
    <div className='container'>
      <h2>Processes</h2>
       <ol>
          {BakingData.map ((item) => <ListItem
           name={item.name}
           purpose={item.purpose} />)
          }
       </ol>
    </ div>
  );
}


