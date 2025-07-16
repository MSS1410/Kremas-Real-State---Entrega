import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/homePage.css'

export default function HomePage() {
  const [city, setCity] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    if (minPrice) params.set('minPrice', minPrice)
    if (maxPrice) params.set('maxPrice', maxPrice)

    navigate(`/listings?${params.toString()}`)
  }

  return (
    <>
      <section className='home_content'>
        <video autoplay muted loop className='home__video'>
          <source src='./assets/video/bcnAir.mp4' type='video/mp4' />
        </video>
        <h1>Encuentra el espacio que se adapte a tus exigencias </h1>
        <p>
          Una de las mejores selecciones de propiedades exclusivas a nivel
          nacional
        </p>

        <form className='search-form' onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Ubicación (ej. Barcelona)'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type='number'
            placeholder='Precio mín. (€)'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <input
            type='number'
            placeholder='Precio máx'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <button type='submit'>Buscar</button>
        </form>
      </section>

      <section className='categories'>
        <h2>Categorias</h2>
        <nav aria-label='categorias de inmuebles'>
          <ul className='categories__list'>
            {[
              {
                name: 'Viviendas',
                category: 'viviendas',
                image: './assets/viviendas.jpg'
              },
              {
                name: 'Obra nueva',
                category: 'obra-nueva',
                image: './assets/obra-nueva.jpg'
              },
              {
                name: 'Oficinas',
                category: 'oficinas',
                image: './assets/oficinas.jpg'
              }
            ].map(({ name, category, image }) => (
              <li key={category} className='categories__item'>
                <a
                  href={`/listings?category=${category}`}
                  className='categories__link'
                >
                  <figure className='categories__figure'>
                    <img src={image} alt={name} className='categories__img' />

                    <figcaption className='categories__caption'>
                      {name}
                    </figcaption>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  )
}
