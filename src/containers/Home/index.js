import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Home extends Component {
  render() {
    return <WrapperStyle>Home page</WrapperStyle>;
  }
}
export default Home;

const WrapperStyle = styled.div`
  ${({ theme }) => css``}
`;
