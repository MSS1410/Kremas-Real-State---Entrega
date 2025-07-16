import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PropertyCard.css'

export default function PropertyCard({ property }) {
  const { id, title, city, price, rating, images } = property
  const principalImage = images[0] || './assets/placeholder.jpg'

  return (
    <Link to={`/property/${id}`} className='property-card'>
      <div className='property-card__img'>
        <img src={principalImage} alt={title} className='property-card__img' />
        <div className='property-card__info'>
          <h3 className='property-card__title'>{title}</h3>

          <p className='property-card__location'>{city}</p>

          <p className='property-card__price'>{price.toLocaleString()}€</p>

          <p className='property-card-rating'>{rating}</p>
        </div>
      </div>
    </Link>
  )
}
