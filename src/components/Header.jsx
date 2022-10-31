import React from 'react'


const Header = ({title, Q}) => {
return(
  <header className='App-header'>
    <h1>{title}</h1>
   <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
    <h2>{Q}</h2>
  </header>
)
}

// How to set default value
Header.defaultProps = {
  title: ''
  }

  export default Header;