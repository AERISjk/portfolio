import React from 'react'
import AboutMe from '../sections/AboutMe'
import AdditionalWork from '../sections/AdditionalWork'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import WorkExperience from '../sections/WorkExperience'
import ScrollLogo from '../sections/ScrollLogo'



const HomePage = () => {
  return (
    <>

      <Hero />
      <ScrollLogo/>
      <AboutMe />

      <Skills />

      <WorkExperience />

      {/* <AdditionalWork/> */}
      <AdditionalWork />

      <Contact />



    </>
  )
}

export default HomePage