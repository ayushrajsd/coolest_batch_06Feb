import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter/Counter';

function App() {
  return (
    <div className="App">
    <Counter/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
