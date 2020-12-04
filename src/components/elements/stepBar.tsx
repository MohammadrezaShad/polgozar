import React from 'react';
import styled from 'styled-components';
// import { colors, fontWeight, spacer, radius, rgba } from 'settings/style';

const bars = [{ title: 'fsa' }, { title: 'fsa' }, { title: 'fsa' }];

function StepBar() {
  return (
    <StepWrapper>
      {bars.map((step, index) => (
        <StepItem>
          <div className="step">{index + 1}</div>
          <div className="title">{step.title}</div>
        </StepItem>
      ))}
    </StepWrapper>
  );
}

// const Wrapper = styled.div``;

export default StepBar;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StepItem = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-of-type):after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: brown;
    position: absolute;
    top: 1.25rem;
    z-index: -2;
    left: 50%;
  }
  .step {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
    z-index: 2;
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 2rem;
      height: 2rem;
      margin: auto;
      background-color: red;
      border-radius: 100%;
      z-index: -1;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
  .title {
    text-align: center;
  }
`;
