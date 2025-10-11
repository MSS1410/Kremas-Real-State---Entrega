import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { properties } from '../data/properties'
import '../styles/PropertyPage.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function PropertyPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((p) => p.id === +id)

  if (!property) {
    return (
      <div className='property-page__notfound'>
        <p>Inmueble no disponible.</p>
      </div>
    )
  }

  const {
    title,
    city,
    address,
    price,
    description,
    rating,
    images = []
  } = property

  const [current, setCurrent] = useState(0)
  const total = images.length

  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  // state para el form de consulta
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // para Enviar datos a la API
    setSent(true)
  }

  return (
    <div className='property-page'>
      <button className='property-page__back' onClick={() => navigate(-1)}>
        ← Volver
      </button>

      {/* 1 gall slider */}
      <div className='gallery-slider'>
        {total > 0 ? (
          <>
            <img
              src={images[current]}
              alt={`${title} foto ${current + 1}`}
              className='gallery-img'
            />
            <button className='gallery-arrow left' onClick={prev}>
              <FaChevronLeft />
            </button>
            <button className='gallery-arrow right' onClick={next}>
              <FaChevronRight />
            </button>
            <div className='gallery-counter'>
              {current + 1} / {total}
            </div>
          </>
        ) : (
          <div className='gallery-placeholder'>Sin imágenes</div>
        )}
      </div>

      {/* 2 details */}
      <div className='property-page__details'>
        <h1 className='property-page__title'>{title}</h1>
        <p className='property-page__location'>
          {city}, {address}
        </p>
        <p className='property-page__price'>{price.toLocaleString()} €</p>
        <p className='property-val'>Valoración: {rating} ★</p>
        <p className='property-page__description'>{description}</p>
      </div>

      {/* 3 form de consulta */}
      <div className='property-page__contact'>
        {sent ? (
          <p className='property-page__contact-ok'>
            ¡Gracias, {contact.name}! Tu consulta ha sido enviada.
          </p>
        ) : (
          <>
            <h2>¿Tienes alguna consulta?</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
              <input
                type='text'
                name='name'
                placeholder='Tu nombre *'
                value={contact.name}
                onChange={handleChange}
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Tu email *'
                value={contact.email}
                onChange={handleChange}
                required
              />
              <textarea
                name='message'
                placeholder='Tu mensaje *'
                value={contact.message}
                onChange={handleChange}
                required
              />
              <button type='submit'>Enviar consulta</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
