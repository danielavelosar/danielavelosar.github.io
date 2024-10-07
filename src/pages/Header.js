import '../styles/App.scss';
import { Menu, X } from 'lucide-react';
import React, {useState} from 'react';
function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }
      <body>
      <header>
          <nav className='section_navbar'>
              <div className='section_navbar__item_container'>
                <h1>Paula Velosa</h1>
              </div>
              <div className='section_navbar__item_container' onClick={toggleMenu}>
                {isMenuOpen ? <X color="white" size={40}/> : <Menu color="white" size={40} />}
              </div>
              <div className='section_navbar__item_container'>
                <a href="mailto:paula.velosa2704@gmail.com" className='main_button'> Contactons-Nous </a>
              </div>
          </nav>
      </header>
  
      {isMenuOpen && (
        <div className='section_navbar section_navbar_menu'>
          <a href="#about">À Propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
          <a href="#future-projects">Projets Futurs</a>
        </div>
      )}
      </body>
}

export default Header;