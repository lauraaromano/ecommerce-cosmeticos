import styled from 'styled-components'

export const ProductsSection = styled.section`
  width: 100%;
  padding: 66px 72px 110px;

  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 72px 20px 82px;
  }
`

export const ProductsHeader = styled.div`
  max-width: 620px;
  margin: 0 auto 56px;

  text-align: center;
`

export const ProductsEyebrow = styled.p`
  margin-bottom: 14px;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
`

export const ProductsTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.primaryDarker};

  font-size: clamp(38px, 5vw, 58px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.05;
`

export const ProductsTitleHighlight = styled.span`
  display: block;

  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.15em;
  font-weight: 400;
  letter-spacing: 0;
`

export const ProductsDescription = styled.p`
  max-width: 480px;
  margin: 22px auto 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
  line-height: 1.8;
`

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`

export const ProductsList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;

  width: 100%;
  padding: 12px 8px 20px;

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const ProductCircleItem = styled.div`
  flex: 0 0 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  scroll-snap-align: center;

  @media (max-width: 768px) {
    flex-basis: 132px;
  }
`

export const ProductCircleButton = styled.button`
  width: 260px;
  height: 260px;
  padding: 0;

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.softPink};

  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    width: 132px;
    height: 132px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;
`

export const ProductName = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 500;
  text-align: center;
`

export const CarouselButton = styled.button`
  position: relative;
  z-index: 2;

  flex: 0 0 auto;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.58);
  color: ${({ theme }) => theme.colors.primary};

  font-size: 20px;
  line-height: 1;

  cursor: pointer;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(193, 106, 123, 0.82);
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

    @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    font-size: 17px;
    }
`

