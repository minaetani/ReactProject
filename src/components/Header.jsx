import React from 'react'


const Header = ({title}) => {
return(
  <header className='App-header'>
  <h1>{title}</h1>
   <div className='wrapper'>
     <img className='App-logo' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
     <a href="https://www.flaticon.com/free-icons/sourdough" title="sourdough icons">Sourdough icons created by mangsaabguru - Flaticon</a>
  </div>
  </header>
)
}

// How to set default value
Header.defaultProps = {
  title: 'Welcome to Sourdough Baking Planner!'
  }

  export default Header;