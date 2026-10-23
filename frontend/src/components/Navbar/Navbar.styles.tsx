import styled from 'styled-components'

interface NavigationProps {
  $isOpen: boolean
}

export const NavbarContainer = styled.header`
  position: relative;
  z-index: 10;

  width: 100%;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
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

  color: var(--color-primary);
  text-decoration: none;
`

export const LogoImage = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
`

export const LogoName = styled.span`
  color: var(--color-primary);
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
    top: 76px;
    right: 0;
    left: 0;
    z-index: 10;

    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    gap: 0;

    padding: 16px 32px 24px;
    border-bottom: 1px solid var(--color-border);

    background-color: var(--color-white);
  }
`

export const NavigationLink = styled.a`
  position: relative;

  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;

    height: 1px;
    background-color: var(--color-primary);

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border);
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

  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-white);

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
    background-color: var(--color-text);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
