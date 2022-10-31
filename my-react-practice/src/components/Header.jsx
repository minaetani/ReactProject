import React from 'react'


const Header = ({title}) => {
return(
  <header className='App-header'>
   <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
    <h1>{title}</h1>
  </header>
)
}

// How to set default value
Header.defaultProps = {
  title: ''
  }

  export default Header;