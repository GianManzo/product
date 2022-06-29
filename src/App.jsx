import React from 'react'
import './css/App.css'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Products } from './Pages/Products'
import { Contact } from './Pages/Contact'
import { Product } from './Pages/Product'

const AppContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`
const AppContent = styled.div`
  flex: 1;
`

export const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <AppContent>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </AppContent>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  )
}
