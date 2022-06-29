import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ProductSection = styled.section``
const ProductPrice = styled.span``
const ProductDescription = styled.p``

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

  if (loading) return <div>Loading</div>
  if (error) return <p>{error}</p>
  if (product === null) return null
  return (
    <ProductSection className="animeleft">
      <Helmet>
        <title>React | {product.nome}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      {product.fotos.map(picture => (
        <img key={picture.src} src={picture.src} alt={picture.titulo} />
      ))}

      <div>
        <h1>{product.nome}</h1>
        <ProductPrice>R$ {product.preco}</ProductPrice>
        <ProductDescription>{product.descricao}</ProductDescription>
      </div>
    </ProductSection>
  )
}
