import type { AnchorHTMLAttributes, ReactNode } from 'react'

import * as S from './Button.styles'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>
}

export default Button
