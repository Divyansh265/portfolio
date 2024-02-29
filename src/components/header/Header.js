import React, { useState } from 'react'
import "./header.css"
function Header() {
    // change background header
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header")
        }
        else {
            header.classList.remove("scroll-header")
        }
    })
    // toggleMenu
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiceNav] = useState("#home")
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Divyansh</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' onClick={() => setActiceNav('#home')} className={activeNav === "#home" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-estate nav__icon'></i>Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#about' onClick={() => setActiceNav('#about')} className={activeNav === "#about" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#skills' onClick={() => setActiceNav('#skills')} className={activeNav === "#skills" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-file-alt nav__icon'></i>Skills
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#services' onClick={() => setActiceNav('#services')} className={activeNav === "#services" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-briefcase-alt nav__icon'></i>Services
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#testimonial' conClick={() => setActiceNav('#portfolio')} className={activeNav === "#portfolio" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-scenery nav__icon'></i>Portfolio
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#contact' onClick={() => setActiceNav('#contact')} className={activeNav === "#contact" ? 'nav__link active-link' : 'nav__link '}>
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
