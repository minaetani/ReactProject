import './App.css';
import Header from './components/Header.jsx';
import { Form } from './components/Form.jsx';
import { List } from './components/List.jsx';
import Timer from './components/Timer.jsx';



function App() {
  return (
    <div className='App'>
    <Header title='When Do You Want To' q='Your Bread?'/>
    <Form />
    <Timer />
    <List />
  </div>
  )
}

export default App;
