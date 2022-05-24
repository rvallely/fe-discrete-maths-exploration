import './App.css';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import BaseConverter from './components/BaseConverter/BaseConverter';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base-converter" element={<BaseConverter />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
