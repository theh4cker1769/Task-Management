import logo from './logo.svg';
import './App.css';
import Signup from './authentication/Signup';
import Sidebar from './navigation/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './navigation/Header';
import Dashboard from './pages/Dashboard/Dashboard';

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
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="my-dashboard" element={<Dashboard />} /> {/* 👈 Renders at /app/ */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
