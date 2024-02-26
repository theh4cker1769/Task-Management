import logo from './logo.svg';
import './App.css';
import Signup from './authentication/Signup';
import Sidebar from './navigation/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './navigation/Header';

function App() {
  // write a function for the button click
  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <>
      {/* <Signup/> */}
      <div className="main d-flex">
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" /> {/* 👈 Renders at /app/ */}
        </Routes>
      </div>
    </>
  );
}

export default App;
