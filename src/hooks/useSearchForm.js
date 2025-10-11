import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  mode: 'rent',
  city: '',
  category: '',
  minPrice: '',
  maxPrice: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'RESET':
      return initialState
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

/**
 * Hook : encapsula el estado del form de search y la nav.
 */
export default function useSearchForm() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()

  const setField = (field, value) =>
    dispatch({ type: 'SET_FIELD', field, value })

  const resetForm = () => dispatch({ type: 'RESET' })

  const submit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(state).forEach(([key, val]) => {
      if (val.trim?.() !== '') params.set(key, val)
    })
    navigate(`/listings?${params.toString()}`)
  }

  return { state, setField, submit, resetForm }
}
