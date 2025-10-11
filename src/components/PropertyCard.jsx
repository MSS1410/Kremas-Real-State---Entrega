// src/components/PropertyCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesState, useFavoritesDispatch } from '../context/favoritos'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import '../styles/PropertyCard.css'

export default function PropertyCard({ property }) {
  const { id, title, city, price, rating, images } = property
  const mainImage = images[0] || '/assets/placeholder.jpg'

  const { favorites } = useFavoritesState()
  const dispatch = useFavoritesDispatch()
  const isFav = favorites.includes(id)

  const toggleFav = (e) => {
    e.preventDefault()
    dispatch({
      type: isFav ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: id
    })
  }

  return (
    <Link to={`/property/${id}`} className='property-card'>
      <div className='property-card__media'>
        <img src={mainImage} alt={title} />
        <button className='property-card__fav-btn' onClick={toggleFav}>
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className='property-card__details'>
        <h3 className='property-card__title'>{title}</h3>
        <p className='property-card__location'>{city}</p>
        <p className='property-card__price'>{price.toLocaleString()} €</p>
      </div>
    </Link>
  )
}
