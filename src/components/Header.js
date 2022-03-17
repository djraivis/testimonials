import React from 'react'
import logo from '../logo.svg'

function Header() {
   return (
      <header>
         <React.StrictMode>
            <div className="header--container">
               <img src={logo} className="header--logo" alt="logo" />
               <h3 className="header--logo_text">React Testimonials</h3>
               <a className="header--a_link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  <h4 className="header--title">Let's Rock</h4>
               </a>
            </div>
         </React.StrictMode>
      </header>
   )
}

export default Header
