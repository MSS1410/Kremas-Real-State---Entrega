import { Link } from 'reac-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='./assets/logo.png' alt='logo Luxury' />
        <Link to='/'>Kremas Luxury</Link>
        <nav className='header__nav'>
          <ul>
            <li>
              <Link to='/listings?mode=rent'>Alquilar</Link>
            </li>
            <li>
              <Link to='/listings?mode=buy'>Comprar</Link>
            </li>
            <li>
              <Link to='/contact'>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
