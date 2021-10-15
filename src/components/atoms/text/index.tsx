import React from 'react';
import { StyledText } from './styles'

interface TextProps {
  text?: string
  size?: number
}

export const Text: React.FC<TextProps> = ({ text, size }) => {
  return <StyledText size={size}>{text}</StyledText>
}