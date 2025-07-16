import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import PropiedadPage from './pages/PropiedadPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listings' element={<ListPage />} />
          <Route path='/property/:id' element={<PropiedadPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
