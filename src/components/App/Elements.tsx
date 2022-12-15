import styled, { keyframes } from 'styled-components'

type LogoStyle = {
  filterStyle?: string
}

export const Logo = styled.img<LogoStyle>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &: hover {
    filter: ${(props) => props.filterStyle ?? 'drop-shadow(0 0 2em #646cffaa)'};
  }
`

const _logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LinkContainer = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: ${_logoSpin} infinite 20s linear;
    }
  }
`

export const Card = styled.div`
  padding: 2em;
`

export const ReadTheDocs = styled.p`
  color: #888;
`
