import {useEffect,React} from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Jaurnals = () => {
   useEffect(()=>{
      scrollTo(top);
    },[])
  return (
   <>
   
   <Navbar/>
   <h1 className="bg-gradient-to-r  from-indigo-600 to-purple-600 bg-clip-text text-transparent w-full text-4xl font-bold text-center mt-2">
              Journals  </h1> <br />
   <Footer/>
   </>
  );
}
export default Jaurnals;
