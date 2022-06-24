// import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to my first React App'
  const likes = 60
  const link = 'https://www.google.com/'
  // const names = {names: 'ola', age:50}
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>{title}</p>
        <p>We have {likes} likes</p>
        {/* <p>{names}</p> */}
        <p>{80}</p>
        <p>{'hello Sandra'}</p>
        <p>{[3,4,5,6]}</p>
        <p>{Math.floor(Math.random()*5)+1} </p>
        <a href={link}>Google Search</a>
      </div>
    </div>
  );
}

export default App;
