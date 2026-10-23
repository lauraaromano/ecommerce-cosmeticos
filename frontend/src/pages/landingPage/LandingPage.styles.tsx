import styled from 'styled-components'

interface HeroSectionProps {
  $backgroundImage: string
}

export const LandingPageContainer = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`

export const AnnouncementBar = styled.div`
  width: 100%;
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  font-size: 12px;
  font-weight: 500;
  text-align: center;
`

export const HeroSection = styled.section<HeroSectionProps>`
  position: relative;

  width: 100%;
  min-height: 620px;

  display: flex;
  align-items: center;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.softPink};
  background-image: ${({ $backgroundImage }) =>
    `url(${$backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 560px;
    background-position: 62% center;
  }
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.94) 0%,
    rgba(255, 255, 255, 0.82) 35%,
    rgba(255, 255, 255, 0.35) 66%,
    rgba(255, 255, 255, 0.08) 100%
  );

  pointer-events: none;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 32px;

  @media (max-width: 768px) {
    padding: 64px 24px;
  }
`

export const HeroEyebrow = styled.p`
  margin-bottom: 22px;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.2px;
  line-height: 1.5;
`

export const HeroTitle = styled.h1`
  max-width: 540px;
  margin: 0;

  color: ${({ theme }) => theme.colors.primaryDarker};

  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  letter-spacing: -2.5px;
  line-height: 0.98;
`

export const HeroSubtitle = styled.span`
  display: block;
  margin-top: 12px;

  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(48px, 6vw, 76px);
  font-weight: 400;
  line-height: 1;
`

export const HeroDescription = styled.p`
  max-width: 430px;
  margin: 28px 0 32px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 15px;
  line-height: 1.8;
`
