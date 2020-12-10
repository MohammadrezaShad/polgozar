import React from 'react';
import { fontSize } from 'settings/style';
import styled from 'styled-components';
import { ReactComponent as MarkerPin } from 'assets/images/marker.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 24px;
  width: 24px;
  user-select: none;
  .icon-pin {
    font-size: ${fontSize.xxl};
  }
  transform: translate(-50%, -50%);
`;
const Marker = ({ mapLoaded }: any) => {
  console.log(mapLoaded);
  return <Wrapper>{mapLoaded ? <MarkerPin /> : null}</Wrapper>;
};

export default Marker;
