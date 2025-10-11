import React, { createContext, useReducer, useContext, useEffect } from 'react'

// creo dos contextos: uno para el state y otro para el dispatch
const StateCtx = createContext()
const DispatchCtx = createContext()

// state inicial vacío
const initialState = { favorites: [] }

// reduzco que añado, quita o resetea favoritos
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter((id) => id !== action.payload)
      }
    case 'RESET_FAVORITES':
      return { favorites: [] }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

// funcion para inicializar el estado leyendo sessionStorage
function init(initial) {
  try {
    const stored = sessionStorage.getItem('favorites')
    return stored ? { favorites: JSON.parse(stored) } : initial
  } catch {
    return initial
  }
}

// provide que que envuelve la app
export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState, init)

  // cada vez que cambie state.favorites, lo guardamos en sessionStorage
  useEffect(() => {
    sessionStorage.setItem('favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  return (
    <StateCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </StateCtx.Provider>
  )
}

// Hooks para consumir el contexto
export function useFavoritesState() {
  return useContext(StateCtx)
}
export function useFavoritesDispatch() {
  return useContext(DispatchCtx)
}
