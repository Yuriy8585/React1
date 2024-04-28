import { useState } from 'react';
import CommentsList from './CommentsList';
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
          href="https://github.com/Yuriy8585/React1.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homework2
        </a>
      </header>
      <body>
      
        <Comment />
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

function Comment () {
  const [comments, setComments] = useState([
    { id: 1, text: 'Это первый комментарий' },
    { id: 2, text: 'Это второй комментарий' },
    { id: 3, text: 'Это третий комментарий' },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));}
  return (
    <div className="app">
      <h1 className="app-title">Комментарии:</h1>
      <CommentsList comments={comments} deleteComment={deleteComment} />
    </div>
  )
}


export default App;
