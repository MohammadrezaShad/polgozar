import { colors, spacer, radius, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonText = styled.span``;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${colors.font};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.normal};
`;

export const StyledWrap = styled.div`
  margin: ${spacer.xl};
`;

export const StyledContainer = styled.div`
  background-color: ${colors.gray1100};
  padding: ${spacer.xl};
  margin-top: ${spacer.md};
  .ant-pagination {
    text-align: right;
  }
  .ant-pagination-item {
    border: none;
    background-color: ${colors.gray1100};
    border-radius: ${radius.mlg};
    & > a {
      color: ${colors.primary300};
    }
    &.ant-pagination-item-active {
      background-color: ${colors.white};
    }
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    display: none;
  }
`;
