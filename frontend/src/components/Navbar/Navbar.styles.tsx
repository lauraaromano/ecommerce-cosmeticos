import styled from 'styled-components'

interface NavigationProps {
  $isOpen: boolean
}

export const NavbarContainer = styled.header`
  position: relative;
  z-index: 10;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 76px;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`

export const LogoImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
`

export const LogoName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.5px;
`

export const Navigation = styled.nav<NavigationProps>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: calc(100dvh - 76px);
    min-height: 420px;

    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    gap: 0;

    padding: 24px 32px;

    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    overflow-y: auto;
  }
`


export const NavigationLink = styled.a`
  position: relative;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;

    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 14px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 15px;

    &::after {
      display: none;
    }
  }
`

export const MenuButton = styled.button`
  display: none;

  width: 42px;
  height: 42px;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  span {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
