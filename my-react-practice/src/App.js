import './App.css';
import Header from './components/Header.jsx';
import { List } from './components/List.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <div className='App'>
      <Header title='When Do You Want To' q='Your Bread?'/>
     <main>
       <Timer />
       <List />
     </main>
  </div>
  )
}

export default App;
