import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const PoductName = styled.h1`
  margin: 0.5rem 0;
`

export const Products = () => {
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(r => r.json())
      .then(json => setProducts(json))
  }, [])

  if (products === null) return null
  return (
    <ProductsSection className="animeleft">
      <Helmet>
        <title>React | Produtos</title>
        <meta name="description" content="" />
      </Helmet>

      {products.map(product => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <PoductName>{product.nome}</PoductName>
        </Link>
      ))}
    </ProductsSection>
  )
}
