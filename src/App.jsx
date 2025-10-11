import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import PropiedadPage from './pages/PropiedadPage'
import ContactPage from './pages/ContactPage'
import ScrollArriba from './components/scrollArriba'
import FavoritesPage from './pages/FavoritosPage'
import { FavoritesProvider } from './context/favoritos'

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <ScrollArriba />
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/listings' element={<ListPage />} />
            <Route path='/property/:id' element={<PropiedadPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </FavoritesProvider>
    </BrowserRouter>
  )
}
