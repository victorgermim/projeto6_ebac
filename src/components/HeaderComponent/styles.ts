import styled from 'styled-components'

import bgImage from '../../assets/images/bg-header.png'
import { breakpoints } from '../../styles'

export const ContainerHeader = styled.div`
  background-image: url(${bgImage});
  padding: 40px;
  text-align: center;
  margin-bottom: 80px;
`
export const TextHeader = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  width: 540px;
  margin: 136px auto 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 80px;
    font-size: 24px;
    max-width: 100%;
  }
`
