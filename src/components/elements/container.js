import styled from 'styled-components'
import { sizes, spacer, media } from 'settings/style'

const Container = styled.div`
  max-width: ${sizes.xxl};
  padding: 0 ${spacer.xl};
  margin: auto;
  ${media.lg`
    padding: 0 ${spacer.lg};
  `}
`

export default Container
