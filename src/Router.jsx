import { useRef } from 'react';
import NavBar from './sections/Navbar';
import Hero from './sections/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './sections/Resume';
function App() {
  const ref = useRef();

  return (

    <>
     
     {/* <main className = "relative"> */}
      {/* <NavBar/> */}
     <Router>
            <Routes>
                <Route path="/" element={<NavBar/>} />
                <Route path="/resume" element={<Resume/>} />
            </Routes>
        </Router>
      {/* <section className= "xl:padding-1 wide:padding-r padding-b"></section> */}
     {/* </main> */}
    </>
   
  );
}

export default App;
