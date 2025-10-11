import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { properties } from '../data/properties'

export default function useProperties() {
  const { search } = useLocation()
  const params = useMemo(() => new URLSearchParams(search), [search])

  // leer y normalizar params, todo en minus
  const modeParam = params.get('mode')?.trim().toLowerCase() || ''
  const cityParam = params.get('city')?.trim().toLowerCase() || ''
  const categoryParam = params.get('category')?.trim().toLowerCase() || ''
  const minPrice = parseFloat(params.get('minPrice')) || 0
  const maxPrice = parseFloat(params.get('maxPrice')) || Infinity

  // filtro propiedades por criterios combinados
  const filteredResults = useMemo(() => {
    return properties.filter((prop) => {
      const propMode = prop.mode?.toLowerCase() || ''
      const propCity = prop.city?.toLowerCase() || ''
      const propCategory = prop.category?.toLowerCase() || ''

      const matchesMode = !modeParam || propMode === modeParam
      const matchesCity = !cityParam || propCity.includes(cityParam)
      const matchesCategory = !categoryParam || propCategory === categoryParam
      const matchesMinPrice = prop.price >= minPrice
      const matchesMaxPrice = prop.price <= maxPrice

      return (
        matchesMode &&
        matchesCity &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      )
    })
  }, [modeParam, cityParam, categoryParam, minPrice, maxPrice])

  return filteredResults
}
