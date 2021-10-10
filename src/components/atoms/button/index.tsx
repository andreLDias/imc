import React from 'react';
import { StyledButton } from './styles'

export const Button = ({ content = 'test' }) => {
  return (
    <StyledButton>
      {content}
    </StyledButton>
  )
}