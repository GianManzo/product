import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.footer`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaa;
  height: 10rem;
  padding-top: 5rem;
  box-sizing: border-box;
`

export const Footer = () => {
  return (
    <ContainerFooter>
      <p>Direitos reservados</p>
    </ContainerFooter>
  )
}
