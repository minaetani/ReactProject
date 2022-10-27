import './App.css';
import Header from './components/Header.jsx';
import { List } from './components/List.jsx';
import Timer from './components/Timer.jsx';
import { useState } from "react";


function App() {
  const [isClicked, setIsClicked ] = useState(false);
  const handleClick = () => { 
   setIsClicked (!isClicked);
 }  
  return (
    <div className='App'>
      <Header title='When Do You Want To' Q='Your Bread?'/>
     <main>
       <Timer isClicked={isClicked}/>
       <List />
     </main>
  </div>
  )
}


export default App;
