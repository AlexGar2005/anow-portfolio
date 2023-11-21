
import './App.css'
import About from './components/About'
import Description from './components/Description'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Info from './components/Info'
import Navbar from './components/Navbar'
import News from './components/News'
import Quote from './components/Quote'
import Skills from './components/Skills'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Works from './components/Works'

function App() {


  return (
  <main>
    <Navbar />
    <Hero/>
    <About />
    <Quote />
    <Description />
    <Works />
    <Skills />
    <Team />
    <Testimonials />
    <News />
    <Info />
    <Footer />
  </main>
  )
}

export default App
