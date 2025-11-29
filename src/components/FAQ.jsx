import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import '../styles/faq.css'

const faqs = [
  {
    question: '¿Cómo puedo contactar con un agente?',
    answer:
      'A través de el formulario en nuestra página de contacto o llamando a (+34)93 590 30 30.'
  },
  {
    question: '¿Qué tipos de propiedades ofrecen?',
    answer:
      'Tenemos viviendas, obra nueva, oficinas y parkings en las principales ciudades de España.'
  },
  {
    question: '¿Cómo funcionan las visitas a las propiedades?',
    answer:
      'Programamos visitas presenciales o virtuales según su disponibilidad y preferencia.'
  }
]

export default function FaqSection({ items = faqs }) {
  const [openFaq, setOpenFaq] = useState(null)

  const toggle = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <section className='faq'>
      <h2>Preguntas Frecuentes</h2>
      <ul className='faq_list'>
        {items.map((item, i) => (
          <li key={i} className='faq_question'>
            <button className='faq_but' onClick={() => toggle(i)}>
              {item.question}
              <span className='faq_row'>
                {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openFaq === i && <p className='faq_answer'>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
