import './App.css'
import About from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App
