import { Button } from 'components/atoms';
import { InfoInput } from 'components/molecules';
import React from 'react';
import { Wrapper } from './styles'

interface MainCalculatorProps {
  textSize?: number
}

export const MainCalculator: React.FC<MainCalculatorProps> = ({ textSize }) => {
  return (
    <Wrapper>
      <InfoInput text={'Altura'} textSize={textSize} />
      <InfoInput text={'Peso'} textSize={textSize} />
      <Button content={'Calcular'} />
    </Wrapper>
  )
}