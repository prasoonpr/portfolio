import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <>
    <Navbar/>
     <Profile id="about"/>
     <Skills id="skills"/>
     <Projects id="projects"/>
     <Footer/>
    </>
  )
}

export default App
