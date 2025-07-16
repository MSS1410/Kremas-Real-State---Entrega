import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { properties } from '../data/properties'
import '../styles/PropertyPage.css'

export default function PropietyPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((prope) => prope.id === parseInt(id, 10))

  if (!property) {
    return
    ;<div className='noResults__property'>
      <p>Inmueble no disponible</p>
    </div>
  }

  const { title, city, adress, price, description, rating, images } = property

  return (
    <div className='property-page'>
      <button
        className='property-page__back'
        onClick={() => navigate(-1)}
      ></button>

      <h1 className='property-page__title'>{title}</h1>
      <p className='property-page_location'>
        {city},{adress}
      </p>

      <p className='property-page__price'>{price.toLocaleString()}</p>
      <p className='property-page__rating'>{rating}</p>

      <div className='property-page__gallery'>
        {images.length > 0 ? (
          images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} foto ${idx + 1}`}
              className='property-page__image'
            />
          ))
        ) : (
          <img
            src='/images/placeholderProperty.jpg'
            alt='Imagenes no disponibles'
            className='property-page__image'
          ></img>
        )}
      </div>
      <p className='property-page__description'>{description}</p>
    </div>
  )
}
