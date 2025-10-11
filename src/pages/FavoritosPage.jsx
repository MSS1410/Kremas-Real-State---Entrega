import React from 'react'
import { useFavoritesState } from '../context/favoritos'
import { properties } from '../data/properties' // o data/properties según tu setup
import PropertyCard from '../components/PropertyCard'
import '../styles/favoritos.css'

export default function FavoritesPage() {
  const { favorites } = useFavoritesState()
  const favProps = properties.filter((prop) => favorites.includes(prop.id))

  return (
    <section className='favorites-page'>
      <h2>Tus Favoritos</h2>
      {favProps.length > 0 ? (
        <div className='favorites-list'>
          {favProps.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      ) : (
        <p className='favorites-empty'>No tienes favoritos aún.</p>
      )}
    </section>
  )
}
