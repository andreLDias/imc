import React from 'react';
import { Wrapper } from './styles'
import { MainCalculator } from 'components/organisms';

function ImcCalculator() {
  return (
    <Wrapper className="Calculator">
      <MainCalculator textSize={25} />
    </Wrapper>
  )
}

export default ImcCalculator;
