import React from 'react'
import { BakingData } from './BakingData.js'
import Timer from './Timer.jsx'

function ListItem(props) {
  return (
    <li>
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
       {BakingData.map ((item)=><ListItem
        name={item.name}
        purpose={item.purpose} />)
       }
       { isClicked && <Timer />}
       </ol>
    </ div>
  );
}


