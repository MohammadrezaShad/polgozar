import { colors, spacer, radius, fontSize, fontWeight } from 'settings/style';
import styled from 'styled-components';

export const StyledButton = styled.div<{ bg?: 'primary' | 'gray' }>`
  background-color: ${({ bg }) => (bg === 'gray' ? colors.white500 : colors.primary200)};
  text-align: right;
  padding: 0 ${spacer.xl} ${spacer.sm} ${spacer.xl};
  border-bottom-right-radius: ${radius.mlg};
  border-bottom-left-radius: ${radius.mlg};
`;

export const StyledItem = styled.div<{ bg?: 'primary' | 'gray' }>`
  margin-bottom: 0 !important;
  border-top-right-radius: ${radius.mlg};
  border-top-left-radius: ${radius.mlg};
  background-color: ${({ bg }) => (bg === 'gray' ? colors.white500 : colors.primary200)};
  textarea {
    padding: 40px ${spacer.xl} ${spacer.md} 80px;
    margin-top: ${spacer.md};
    border-top-right-radius: ${radius.mlg};
    border-top-left-radius: ${radius.mlg};
    background-color: ${({ bg }) => (bg === 'gray' ? colors.white500 : colors.primary200)};
    border: none;
    font-size: ${fontSize.xl};
    font-weight: ${fontWeight.light};
    color: ${colors.font};
    resize: none;
    &:focus,
    &:hover {
      border-color: ${colors.primary200};
      box-shadow: none;
    }
  }
`;

export const StyledComment = styled.div`
  position: relative;
  .ant-comment-inner {
    padding-top: ${spacer.xl};
    padding-bottom: ${spacer.xl};
  }
  .ant-comment-content {
    position: relative;
  }
  .ant-comment-content-author-time {
    position: absolute;
    bottom: -20px;
    left: 0;
  }
  .ant-comment-avatar {
    position: absolute;
    top: -5px;
    z-index: 1;
    left: -17px;
  }
`;

export const StyledTime = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 1;
  left: 14px;
`;
