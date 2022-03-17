// IMPORT COMPONENTS
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
// IMPORT STYLING
import './style/App.css'

import './style/Header.css'
import './style/Nav.css'
import './style/Main.css'
import './style/Aside.css'
import './style/Testimonials.css'
import './style/Footer.css'

//FUNCTION APP INDIVIDUAL SECTIONS
function App() {
  return (
    <div className='app'>
      <Header />
      {/* <div className="main-wrap">
        <Nav />
        <Main />
        <Aside />
      </div> */}
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
