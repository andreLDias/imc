import React from 'react';
import { StyledButton } from './styles'

interface ButtonProps {
  content?: string
  onClick: Function
  disabled: boolean
}

export const Button: React.FC<ButtonProps> = ({ content, onClick, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={() => onClick()}>
      {content}
    </StyledButton>
  )
}