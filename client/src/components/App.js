// import logo from './logo.svg';
import '../css/App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/home" element={Home}></Route>
        <Route path="/Login" element={Login}></Route>
        <Route path="/Signup" element={Signup}></Route>
      </Routes>
    </div>
  );
}

export default App;
