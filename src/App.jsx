import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './sections/AboutMe';
import WorkExperience from './sections/WorkExperience';
import Layout from './pages/Layout';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
function App() {
  const ref = useRef();

  return (

    <>
     
     {/* <main className = "relative"> */}
      {/* <NavBar/> */}
     <Router>
      <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/AboutMe" element={<AboutMe/>} />
                <Route path="/Skills" element={<Skills/>} />
                <Route path="/WorkHistory" element={<WorkExperience/>} />
                <Route path="/Resume" element={<Resume/>} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
            </Layout>
        </Router>
      {/* <section className= "xl:padding-1 wide:padding-r padding-b"></section> */}
     {/* </main> */}
    </>
   
  );
}

export default App;
