import { Input, Text } from 'components/atoms';
import React from 'react';
import { Wrapper } from './styles'

interface InfoInputProps {
  text?: string
  textSize?: number
  onChange: Function
}

export const InfoInput: React.FC<InfoInputProps> = ({ text, textSize, onChange }) => {
  return (
    <Wrapper>
      <Text text={text} size={textSize} />
      <Input onChange={onChange} />
    </Wrapper>
  )
}