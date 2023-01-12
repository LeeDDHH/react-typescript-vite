import React from 'react'
import styled from 'styled-components'

type SBButtonProps = {
  width?: string
  height?: string
  color?: string
  bgColor?: string
}

type Props = {
  children?: React.ReactNode
  onClick: () => void
  width?: string
  height?: string
  color?: string
  bgColor?: string
  label?: string
}

export const Button = (props: Props) => {
  const { children, ...rest } = props
  return <SBButton {...rest}>{children}</SBButton>
}

const SBButton = styled.button<SBButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`

SBButton.defaultProps = {
  width: 'fit-content',
  height: 'fit-content',
  color: '#000000',
  bgColor: '#FFFFFF',
  children: 'Button',
}
