import React from 'react'
import '../css/App.css'
import styled from 'styled-components'
import img from '../img/contato.jpg'
import { Helmet } from 'react-helmet'

const ContactSecion = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

const ContactContent = styled.div``

const ContactUl = styled.ul`
  padding: 0px;
  list-style: none;
  li {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.8rem;
    ::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 2px;
      background: #ddd;
      margin-right: 10px;
    }
  }
`

export const Contact = () => {
  return (
    <ContactSecion className="animeleft">
      <Helmet>
        <title>React | Contato</title>
        <meta name="description" content="Entre em contato" />
      </Helmet>

      <img src={img} alt="maquina de escrever" />
      <ContactContent>
        <h1>Entre em contato.</h1>
        <ContactUl>
          <li>ggianmanzo@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua logo ali, 42</li>
        </ContactUl>
      </ContactContent>
    </ContactSecion>
  )
}
