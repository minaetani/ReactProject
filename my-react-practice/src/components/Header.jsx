import React from 'react'
import { useState } from 'react'
import ToggleButton from './ToggleButton.jsx'


// const Header = (props) => {
//   return (
//     <header>
//       <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
//       <h1>{props.title}</h1>
//       <ToggleButton text='START' color='turquoise' /><ToggleButton text='FINNISH' color='pink'/>
//       <h1>{props.q}</h1>
//     </header>
//   )
// }

// or write in destructing
const Header = ({ title, q }) => {
 return (
 <header>
  <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
  <h1>{title}</h1>
  <ToggleButton onclick={() => {handleCalcFinish(); clickStart();}} text='START' color='turquoise' />
  <ToggleButton  onclick={() => {handleCalcStart(); clickFinish()}} text='FINISH' color='pink'/>
  <h1>{q}</h1>
</header>
)
}

// How to set default value 
Header.defaultProps = {
  title: 'Sourdough Baking Planner for Your Busy Life'
}

//Set a certain data types and set it to 'requires' for props to catch errors
//Header.propTypes = {
//  title: propTypes.strings.isRequired,
//}

// CSS styling in JS file. const properties and drop it within { } to h1 attributes 
// When doing this inline, give 'style' attribute and provide properties within {{ }}
// But
//const headerStyling = {
// color: 'red',
// backgroundColor : 'black',
// }

export default Header
