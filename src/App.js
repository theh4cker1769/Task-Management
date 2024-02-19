import logo from './logo.svg';
import './App.css';
import Signup from './authentication/Signup';

function App() {
  // write a function for the button click
  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <>
      <Signup/>
    </>
  );
}

export default App;
