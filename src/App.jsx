
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import { themeContext } from '../Context.jsx'
import { useContext } from 'react'
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='app' style={{background: darkMode?'black':'',color:darkMode?'white':""}}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
