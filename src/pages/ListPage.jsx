import React from 'react'
import { useLocation } from 'react-router-dom'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function ListinPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const city = params.get('city') || ''
  const minPrice = parseFloat(params.get('minPrice')) || 0
  const maxPrice = parseFloat(params.get('maxPrice')) || infinite
  const category = params.get('category') || ''

  const filteredResults = properties.filter((prope) => {
    const sameCity =
      !city || prope.city.toLowerCase().includes(city.toLoweCase())

    const sameCategory = !category || prope.category === category
    const sameMinPrice = prope.price >= minPrice
    const sameMaxPrice = prope.price <= maxPrice

    return sameCategory && sameMinPrice && sameMaxPrice && sameCity
  })

  return (
    <section className='listings'>
      {filteredResults.length > 0 ? (
        filteredResults.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))
      ) : (
        <p className='listings__no-results'>
          No se encontraron inmuebles que coincidan con los criterios de
          busqueda.
        </p>
      )}
    </section>
  )
}
