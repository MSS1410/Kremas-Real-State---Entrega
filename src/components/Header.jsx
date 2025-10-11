import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesState } from '../context/favoritos'
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { favorites } = useFavoritesState()
  const navRef = useRef(null)
  const burgerRef = useRef(null)

  // SCROLL HANDLER, MANTNGO LO QUE TENIA
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // outside click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      // si el menu esta abierto y el click NO fue ni en el nav ni en el burger:
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className='header__container'>
        <div className='header__left'>
          <Link to='/' className='header__logo'>
            <img
              src='public/assets/images/logo/KLuxLogo.avif'
              alt='Kremas Luxury'
            />
          </Link>
          <Link to='/' className='header__title'>
            Kremas Real State
          </Link>
        </div>

        {/* burguir button */}
        <button
          ref={burgerRef}
          className='header__burger'
          onClick={() => setMenuOpen((open) => !open)}
          aria-label='Menú'
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav */}
        <nav ref={navRef} className={`header__nav${menuOpen ? ' open' : ''}`}>
          <ul>
            <li>
              <Link to='/listings?mode=rent' onClick={handleLinkClick}>
                Alquilar
              </Link>
            </li>
            <li>
              <Link to='/listings?mode=buy' onClick={handleLinkClick}>
                Comprar
              </Link>
            </li>
            {favorites.length > 0 && (
              <li>
                <Link
                  to='/favorites'
                  className='header__fav'
                  onClick={handleLinkClick}
                >
                  <FaHeart />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
