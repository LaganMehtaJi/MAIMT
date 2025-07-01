import Home from '../src/Screen/Home.jsx';
import About from '../src/Screen/About.jsx';
import './App.css'
import { Routes,Route } from "react-router-dom";



function App() {
  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
      </Routes>
   
    </>
  );
}

export default App
