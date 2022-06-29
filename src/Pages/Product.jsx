import React from 'react'
import '../css/App.css'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
const ProductImg = styled.div`
  img {
    margin-bottom: 2rem;
  }
`
const ProductPrice = styled.span`
  padding: 0.5rem;
  background: #91fb5d;
  color: #017e01;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
`
const ProductDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

export const Product = () => {
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const { id } = useParams()

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setProduct(data)
      } catch (e) {
        setError('Erro ao buscar o produto')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div className="loading"></div>
  if (error) return <p>{error}</p>
  if (product === null) return null
  return (
    <ProductSection className="animeleft">
      <Helmet>
        <title>React | {product.nome}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <ProductImg>
        {product.fotos.map(picture => (
          <img key={picture.src} src={picture.src} alt={picture.titulo} />
        ))}
      </ProductImg>

      <div>
        <h1>{product.nome}</h1>
        <ProductPrice>R$ {product.preco}</ProductPrice>
        <ProductDescription>{product.descricao}</ProductDescription>
      </div>
    </ProductSection>
  )
}
