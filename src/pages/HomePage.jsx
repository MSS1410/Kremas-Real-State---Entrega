import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import bcnAir from '/assets/video/bcnAir.mp4'
import '../styles/homePage.css'
import FaqSection from '../components/FAQ'

export default function HomePage() {
  const [mode, setMode] = useState('rent')
  const [city, setCity] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [category, setCategory] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (mode) params.set('mode', mode)
    if (city.trim()) params.set('city', city.trim())
    if (category) params.set('category', category)
    if (minPrice) params.set('minPrice', minPrice)
    if (maxPrice) params.set('maxPrice', maxPrice)

    navigate(`/listings?${params.toString()}`)
  }

  return (
    <>
      <section className='home_content'>
        <video autoPlay muted loop className='home__video'>
          <source src={bcnAir} type='video/mp4' />
        </video>
        <div className='home__overVideo'>
          <h1>Encuentra el espacio que se adapta a tus exigencias </h1>
          <p>
            Una de las mejores selecciones de propiedades exclusivas centradas
            en la grandiosa ciudad de Barcelona.
          </p>
          <form className='search-form' onSubmit={handleSearch}>
            <select
              className='search-form_mode-select'
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value='rent'>Alquilar</option>
              <option value='buy'>Comprar</option>
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='search-form__location-select'
            >
              <option value='Barcelona'>Barcelona</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=''>Todas las categorias</option>
              <option value='viviendas'>Viviendas</option>
              <option value='obra-nueva'>Obra Nueva</option>
              <option value='oficinas'>Oficinas</option>
              <option value='parkings'>Parkings</option>
            </select>

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
        </div>
      </section>

      <section className='categories'>
        <nav aria-label='categorias de inmuebles'>
          <ul className='categories__list'>
            {[
              {
                name: 'Viviendas',
                category: 'viviendas',
                image: 'public/assets/images/Categorias/nueva.jpg'
              },
              {
                name: 'Obra nueva',
                category: 'obra-nueva',
                image: 'public/assets/images/Categorias/obra-nueva.png'
              },
              {
                name: 'Oficinas',
                category: 'oficinas',
                image: '/assets/images/Categorias/oficinas.avif'
              },
              {
                name: 'Parkings',
                category: 'parkings',
                image: '/assets/images/Categorias/park.webp'
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
      <FaqSection />
    </>
  )
}
