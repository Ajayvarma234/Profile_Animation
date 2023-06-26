
import './App.css';
import Profile from './profile.jpg'

function App() {
  return (
    <div className="App">
      <h1> Profile </h1>
      <div className='box'>
        <div className='content'>
          <img src={Profile} alt="profilePicture"/>
          <h2> Ajay Varma<br/><span> Front-End Developer </span> </h2>
          <a href='#'> Hire me </a>
        </div>
      </div>
      <h1> Animate </h1>
    </div>
  );
}

export default App;
