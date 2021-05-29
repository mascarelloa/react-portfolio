import React, { useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Topbar from '../components/Topbar'
import LazyLoad from 'react-lazyload';
import Contact from '../components/Contact'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Topbar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Hero />
          <Projects />
          <LazyLoad height={300}>
            <Skills />
          </LazyLoad>
          <About />
          <Contact />
          <Footer />
        </>
    )
}

export default Home
