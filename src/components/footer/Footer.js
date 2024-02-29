import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Divyansh</h1>
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='footer__link'>contact</a>
                    </li>
                </ul>
                <div className='footer__social'>
                    <a className='footer__social-link' href='' target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a className='footer__social-link' href='https://www.instagram.com/____divyansh_sharma10____/' target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a className='footer__social-link' href='https://twitter.com/divyans61289847' target='_blank'>
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169;DivyanshS. All rights reserved </span>
            </div>
        </footer>
    )
}

export default Footer
