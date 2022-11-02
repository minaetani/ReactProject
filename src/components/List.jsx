import React from 'react'
import { BakingData } from './BakingData.js'

function ListItem(props) {
  return (
      BakingData.map(item => 
      <li key={item.id}> 
      <h3>{item.name}</h3>
      <p>{item.purpose}</p>
      </li>)
  );
} 

export function List () {    
  return (
    <div className='centered container'>
      <h2>Bread Making Processes</h2>
       <ol className=''>
        <ListItem />
       </ol>
    </ div>
  );
}


