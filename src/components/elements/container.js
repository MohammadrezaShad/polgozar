import styled, { css } from "styled-components";
import { fonts, colors, sizes, spacer, media } from "settings/style";

// export const Header = () => {
//   return <HeaderWrapper></HeaderWrapper>;
// };

const Container = styled.div`
  max-width: ${sizes.xxl};
  padding: 0 ${spacer.xl};
  margin: auto;
  ${media.lg`
    padding: 0 ${spacer.lg};
  `}
`;

export default Container;
