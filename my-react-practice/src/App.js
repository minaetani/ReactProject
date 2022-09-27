import logo from './logo.svg';
import './App.css';
import BakeUpForm from './components/BakeUpForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Sourdough Baking Timer!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BakeUpForm />
      </header>

      
    </div>
  );
}



export default App;
