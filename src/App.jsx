import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Produtos } from './Components/Produtos'
import { Contato } from './Components/Contato'

const AppContainer = styled.div``

const AppContent = styled.div``

export const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <AppContent>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </AppContent>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  )
}
