import logo from './logo.svg';
import './App.css';

function App() {
  // write a function for the button click
  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
