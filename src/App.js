import logo from './logo2.svg';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homework1
        </a>
      </header>
      <body>
        <Heading />
        <Message />
      </body>
    </div>
  );
}

function Heading () {
  return (
    <div>
      <h1>Работа с React</h1>
      <p></p>
      <a href="*">Официальная документация</a>
      
    </div>
    
  )
}

function Message () {
  return (
    <div>
      <p>При клике по ссылке вы получите официальную документацию</p>
    </div>
  )
}

export default App;
