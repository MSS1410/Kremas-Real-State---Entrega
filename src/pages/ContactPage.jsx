import React, { useState } from 'react'
import '../styles/ContactPage.css'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // podria enviar datos a server API
    setSent(true)
  }

  return (
    <section className='contact-page'>
      <h2>Contacta con nuestro equipo</h2>

      {sent ? (
        <p className='contact-page_OK'>
          ¡Gracias, {form.name}! Hemos recibido tu mensaje y te responderemos en
          breve.
        </p>
      ) : (
        <form className='contact-form' onSubmit={handleSubmit}>
          <label>
            Nombre *
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email *
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Asunto
            <input
              type='text'
              name='subject'
              value={form.subject}
              onChange={handleChange}
            />
          </label>

          <label>
            Mensaje *
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type='submit'>Enviar Mensaje</button>
        </form>
      )}
    </section>
  )
}
