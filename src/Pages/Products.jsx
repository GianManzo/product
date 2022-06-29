import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const ProductsSection = styled.section``

export const Products = () => {
  return (
    <ProductsSection>
      <Helmet>
        <title>React | Produtos</title>
        <meta name="description" content="" />
      </Helmet>
      <h1>Produtos</h1>
    </ProductsSection>
  )
}
