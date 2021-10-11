import React from 'react';
import { Wrapper } from './styles'
import { Button, Input, RadioButton } from '../../atoms'

function Calculator() {
  return (
    <Wrapper className="Calculator">
      <Button content={'test'}/>
      <Input/>
      <RadioButton selected={true}/>
    </Wrapper>
  )
}

export default Calculator;
