import React from 'react';
import { StyledRadioButton } from './styles'

interface RadioButtonProps {
  selected: boolean
}

export const RadioButton: React.FC<RadioButtonProps> = ({ selected }) => {
  return <StyledRadioButton type="radio" />
}