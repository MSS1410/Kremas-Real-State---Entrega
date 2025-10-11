import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='footer__about'>
          <Link to='/' className='footer__about-logo'>
            <img src='/assets/images/logo/KLuxLogo.avif' alt='Kramas Luxury' />
          </Link>
          <p className='footer__about-text'>
            Kramas Luxury Real State ofrece las mejores propiedades de alto
            standing en España. Inspiramos confianza y te acompañamos en cada
            paso.
          </p>
        </div>

        <div className='footer__location1'>
          <h4>Barcelona</h4>
          <p>Torre Diagonal</p>
          <p>Av. Diagonal, 325, Planta 12ª</p>
          <p>(+34) 93 590 30 30</p>
          <p>barcelona@kremasLuxury.com</p>
        </div>
        <div className='footer__location2'>
          <h4>Madrid</h4>
          <p>Pº de la Castellana, 95, Planta 28ª 28046 Madrid</p>

          <p>(+34) 91 112 18 48</p>
          <p>madrid@kremasLuxury.com</p>
        </div>

        <div className='footer__link'>
          <Link to='/contact' className='footer__contact-btn'>
            Contacta con nosotros
          </Link>
        </div>
      </div>

      <div className='footer__social'>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>

        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram />
        </a>

        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <FaFacebook />
        </a>

        <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
          {' '}
          <FaYoutube />
        </a>
      </div>

      <div className='footer__bottom'>
        <p> 2025 © Kramse Grupo Inmobiliario. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
