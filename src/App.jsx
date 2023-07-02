
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import { themeContext } from '../Context.jsx'
import { useContext, useEffect, useState } from 'react'
import { RiseLoader } from 'react-spinners'
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {
        loading ? <div className="loader "><RiseLoader color="#FDB61A" loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader" />
        <h5>Loading....</h5>
        </div> : <div className='app' style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : "" }}>
          <Navbar></Navbar>
          <Intro></Intro>
          <Services></Services>
          <Skills></Skills>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      }
    </div>
  )
}

export default App
