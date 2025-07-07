import Home from '../src/Screen/Home.jsx';
import About from '../src/Screen/About.jsx';
import Rule from "../src/Screen/Rule.jsx";
import Paper from "../src/Screen/Papers.jsx";
import Syllabus from '../src/Screen/Syllabus.jsx';
import Contact from '../src/Screen/Contact.jsx';
import EContent from '../src/Screen/EContent.jsx';
import Jaurnals from '../src/Screen/Journals.jsx';
import Main from "../src/Components/Main/index.jsx";
import QuestionPaper from '../src/Components/QuestionPapers/index.jsx';
import EBook from "../src/Components/EBook/index.jsx";
import ClassApp from "../src/Screen/ClassApp.jsx";
import './App.css'
import { Routes,Route } from "react-router-dom";





function App() {
  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
        <Route path="/rule" element={<Rule/>} />
       <Route path="/paper" element={<Paper/>} />
       <Route path="/syllabus" element={<Syllabus/>} />
        <Route path="/contact" element={<Contact/>} />
       <Route path="/journals" element={<Jaurnals/>} />
       <Route path="/econtent" element={<EContent/>} />
         <Route path="/class/:id" element={<Main/>} />
           <Route path="/question/:id" element={<QuestionPaper/>} />
             <Route path="/book/:id" element={<EBook/>} />
             <Route path="/app/:id" element={<ClassApp/>}/>
      </Routes>
   
    </>
  );
}

export default App
