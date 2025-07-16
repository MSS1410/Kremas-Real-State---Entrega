import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='footer__location'>
          <h4>Barcelona</h4>
          <p>Torre Diagonal</p>
          <p>Av. Diagonal, 325, Planta 12ª</p>
          <p>(+34) 93 590 30 30</p>
          <p>national@kremasLuxury.com</p>
        </div>

        <div className='footer__link'></div>
        <Link to='/contact' className='footer__contact-btn'>
          Contacta con nosotros
        </Link>
      </div>

      <div className='footer__social'>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        ></a>

        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        ></a>

        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        ></a>

        <a
          href='https://youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
      </div>

      <div className='footer__bottom'>
        <p> 2025 © Kramse Grupo Inmobiliario. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
