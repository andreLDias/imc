import styled from 'styled-components'

interface StyledTextProps {
  size?: number
}

export const StyledText = styled.p<StyledTextProps>`
  ${({ size }) => size && `font-size: ${size}px;`}
  margin: 0;
`