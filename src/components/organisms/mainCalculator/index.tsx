import React from 'react';
import { Button } from 'components/atoms';
import { InfoInput } from 'components/molecules';
import { useMainCalculator } from './hooks';
import { Wrapper } from './styles'

interface MainCalculatorProps {
  textSize?: number
}

export const MainCalculator: React.FC<MainCalculatorProps> = ({ textSize }) => {
  const { handlers, states } = useMainCalculator()
  const {
    handleWeightInput,
    handleHeightInput,
    handleCalculateImcButton
  } = handlers
  const { buttonDisabled } = states

  return (
    <Wrapper>
      <InfoInput text={'Altura'} textSize={textSize} onChange={handleHeightInput} />
      <InfoInput text={'Peso'} textSize={textSize} onChange={handleWeightInput} />
      <Button content={'Calcular'} onClick={handleCalculateImcButton} disabled={buttonDisabled} />
    </Wrapper>
  )
}