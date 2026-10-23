import productsImage from '../../assets/images/products.png'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'

import * as S from './LandingPage.styles'

function LandingPage() {
  return (
    <S.LandingPageContainer>
      <S.AnnouncementBar>
        Frete grátis nas compras acima de R$ 99,00
      </S.AnnouncementBar>

      <Navbar />

      <S.HeroSection $backgroundImage={productsImage}>
        <S.HeroOverlay />

        <S.HeroContent>
          <S.HeroEyebrow>BEAUTY · SELF CARE · CONFIDENCE</S.HeroEyebrow>

          <S.HeroTitle>
            Your Beauty
            <S.HeroSubtitle>Our Priority</S.HeroSubtitle>
          </S.HeroTitle>

          <S.HeroDescription>
            Descubra uma seleção especial de cosméticos e produtos de
            autocuidado pensados para realçar sua beleza e tornar sua rotina
            ainda mais especial.
          </S.HeroDescription>

          <Button href="#produtos">
            Explorar produtos
            <span aria-hidden="true" style={{ marginLeft: '8px' }}>
              →
            </span>
          </Button>
        </S.HeroContent>
      </S.HeroSection>

      <ProductCarousel />
    </S.LandingPageContainer>
  )
}

export default LandingPage
