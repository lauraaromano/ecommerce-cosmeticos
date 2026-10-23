import { useEffect, useRef } from 'react'

import produto1 from '../../assets/images/produto1.png'
import produto2 from '../../assets/images/produto2.png'
import produto3 from '../../assets/images/produto3.png'
import produto4 from '../../assets/images/produto4.png'
import produto5 from '../../assets/images/produto5.png'
import produto6 from '../../assets/images/produto6.png'

import ProductCircle from './ProductCircle'
import * as S from './ProductCarousel.styles'

const products = [
  {
    id: 1,
    name: 'Creme Facial',
    image: produto1,
  },
  {
    id: 2,
    name: 'Serum',
    image: produto2,
  },
  {
    id: 3,
    name: 'Batom',
    image: produto3,
  },
  {
    id: 4,
    name: 'Gloss Labial',
    image: produto4,
  },
  {
    id: 5,
    name: 'Blush',
    image: produto5,
  },
  {
    id: 6,
    name: 'Paleta de Cores',
    image: produto6,
  },
]

function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const infiniteProducts = [...products, ...products, ...products]

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const productGroupWidth = carousel.scrollWidth / 3

    carousel.scrollLeft = productGroupWidth
  }, [])

  function handleInfiniteScroll() {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const productGroupWidth = carousel.scrollWidth / 3

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += productGroupWidth
    }

    if (carousel.scrollLeft >= productGroupWidth * 2) {
      carousel.scrollLeft -= productGroupWidth
    }
  }

  function handleScroll(direction: 'left' | 'right') {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const scrollAmount = 260

    carousel.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <S.ProductsSection id="produtos">
      <S.ProductsHeader>
        <S.ProductsEyebrow>DESCUBRA SUA ROTINA</S.ProductsEyebrow>

        <S.ProductsTitle>
          Realce sua
          <S.ProductsTitleHighlight>
            beleza natural
          </S.ProductsTitleHighlight>
        </S.ProductsTitle>

        <S.ProductsDescription>
          Encontre produtos selecionados para cuidar da sua beleza de um jeito
          leve, especial e feito para você.
        </S.ProductsDescription>
      </S.ProductsHeader>

      <S.CarouselWrapper>
        <S.CarouselButton
          type="button"
          aria-label="Ver produtos anteriores"
          onClick={() => handleScroll('left')}
        >
          ←
        </S.CarouselButton>

        <S.ProductsList
          ref={carouselRef}
          onScroll={handleInfiniteScroll}
        >
          {infiniteProducts.map((product, index) => (
            <ProductCircle
              key={`${product.id}-${index}`}
              image={product.image}
              name={product.name}
            />
          ))}
        </S.ProductsList>

        <S.CarouselButton
          type="button"
          aria-label="Ver próximos produtos"
          onClick={() => handleScroll('right')}
        >
          →
        </S.CarouselButton>
      </S.CarouselWrapper>
    </S.ProductsSection>
  )
}

export default ProductCarousel
