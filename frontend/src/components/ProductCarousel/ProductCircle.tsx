import * as S from './ProductCarousel.styles'

interface ProductCircleProps {
  image: string
  name: string
}

function ProductCircle({ image, name }: ProductCircleProps) {
  return (
    <S.ProductCircleItem>
      <S.ProductCircleButton type="button" aria-label={`Ver ${name}`}>
        <S.ProductImage src={image} alt={name} />
      </S.ProductCircleButton>

      <S.ProductName>{name}</S.ProductName>
    </S.ProductCircleItem>
  )
}

export default ProductCircle
