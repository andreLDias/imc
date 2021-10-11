import React from 'react';
import { StyledButton } from './styles'

interface ButtonProps {
  content?: string
}

export const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <StyledButton>
      {content}
    </StyledButton>
  )
}