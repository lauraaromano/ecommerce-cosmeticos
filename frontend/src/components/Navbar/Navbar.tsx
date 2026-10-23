import { useState } from 'react'

import Button from '../Button/Button'

import * as S from './Navbar.styles'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  return (
    <S.NavbarContainer>
      <S.NavbarContent>
        <S.BrandLink href="/" aria-label="Aurélle - página inicial">
          <S.LogoImage src="/logoaurelle.png" alt="Logo Aurélle" />

          <S.LogoName>Aurélle</S.LogoName>
        </S.BrandLink>

        <S.MenuButton
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previousState) => !previousState)}
        >
          <span />
          <span />
          <span />
        </S.MenuButton>

        <S.Navigation $isOpen={isMenuOpen}>
          <S.NavigationLink href="/" onClick={handleCloseMenu}>
            Início
          </S.NavigationLink>

          <S.NavigationLink href="#produtos" onClick={handleCloseMenu}>
            Produtos
          </S.NavigationLink>

          <S.NavigationLink href="#categorias" onClick={handleCloseMenu}>
            Categorias
          </S.NavigationLink>

          <S.NavigationLink href="#ofertas" onClick={handleCloseMenu}>
            Ofertas
          </S.NavigationLink>

          <Button href="/login" onClick={handleCloseMenu}>
            Entrar
          </Button>
        </S.Navigation>
      </S.NavbarContent>
    </S.NavbarContainer>
  )
}

export default Navbar
