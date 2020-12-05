import React from 'react';
import styled from 'styled-components';
import { colors, fontWeight, spacer } from 'settings/style';

interface Steps {
  title: string;
}
interface StepBarProps {
  step: number;
  steps: Steps[];
}

function StepBar({ step = 0, steps }: StepBarProps) {
  return (
    <StepWrapper>
      {steps.map((currentStep, index) => (
        <StepItem active={index + 1 <= step}>
          <div className="step">{index + 1}</div>
          <div className="title">{currentStep.title}</div>
        </StepItem>
      ))}
    </StepWrapper>
  );
}

// const Wrapper = styled.div``;

export default StepBar;

const dotSize = 2.5;
const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StepItem = styled.div<{ active: boolean }>`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-of-type):after {
    content: '';
    width: calc(100% - ${dotSize * 2}rem);
    position: absolute;
    top: ${(dotSize + 0.5) / 2}rem;
    z-index: -2;
    left: calc(50% + ${dotSize}rem);
    border-top: 2px dashed ${colors.primary300};
  }
  .step {
    font-weight: ${fontWeight.bold};
    width: ${dotSize + 0.5}rem;
    height: ${dotSize + 0.5}rem;
    border-radius: 100%;
    border: 2px solid ${colors.primary300};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
    z-index: 2;
    transition: all 0.2s;
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: ${dotSize}rem;
      height: ${dotSize}rem;
      margin: auto;
      background-color: ${({ active }) => (active ? colors.primary300 : 'transparent')};
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
    padding-top: ${spacer.sm};
    color: ${colors.gray600};
    font-weight: ${fontWeight.light};
  }
`;
