import React from 'react';
import { StyledInput } from './styles'

interface InputProps {
  label?: string
  onChange: Function
}

export const Input: React.FC<InputProps> = ({ label, onChange }) => {
  return <StyledInput placeholder={label} onChange={(e) => onChange(e.target.value)} />
}