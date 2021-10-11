import React from 'react';
import { StyledInput } from './styles'

interface InputProps {
  label?: string
}

export const Input: React.FC<InputProps> = ({ label }) => {
  return  <StyledInput placeholder={label}/>
}