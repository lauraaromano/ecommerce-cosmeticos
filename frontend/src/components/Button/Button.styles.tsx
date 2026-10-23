import styled from 'styled-components'

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 11px 22px;
  border-radius: 8px;

  background-color: var(--color-primary);
  color: var(--color-white);

  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #a95769;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 18px;
    padding: 13px 22px;
  }
`
