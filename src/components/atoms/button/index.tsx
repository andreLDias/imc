import React from 'react';
import { StyledButton } from './styles'

interface ButtonProps {
  content?: string
  onClick: Function
}

export const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <StyledButton onClick={() => onClick()}>
      {content}
    </StyledButton>
  )
}