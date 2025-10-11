import React from 'react'
import PropertyCard from '../components/PropertyCard'
import useProperties from '../hooks/useProperties'
import '../styles/ListPage.css'

export default function ListinPage() {
  const filteredResults = useProperties()
  const count = filteredResults.length

  return (
    <section className='listings-page'>
      {/* HEADER CON numero de inmuebles */}
      <div className='list-header'>
        <p>
          {count}{' '}
          {count === 1 ? 'inmueble disponible' : 'inmuebles disponibles'}
        </p>
      </div>

      {/* contenedor de PropertyCard */}
      <div className='listings'>
        {filteredResults.length > 0 ? (
          filteredResults.map((prope) => (
            <PropertyCard key={prope.id} property={prope} />
          ))
        ) : (
          <p className='listings__no-results'>
            No se encontraron inmuebles que coincidan con los criterios de
            búsqueda.
          </p>
        )}
      </div>
    </section>
  )
}
