import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
// import { useGetMyAccountQuery } from 'graphql/types';
import { StepBar, Button } from 'components/elements';
import { colors, spacer, fontType, radius, sizes } from 'settings/style';

const steps = [{ title: 'Choose Categories' }, { title: 'Add Cover Photo' }, { title: 'Add Informations' }];

const CreateGroup = () => {
  const [step, setStep] = useState(1);

  const renderedSubmitButton = useMemo(() => {
    let buttonText = 'Next';
    const buttonAction = () => setStep(step + 1);
    if (step === 1) {
      buttonText = 'Continue';
    } else if (step === steps.length) {
      buttonText = 'Confirm';
    }
    return <Button onClick={buttonAction}>{buttonText}</Button>;
  }, [step]);

  return (
    <div>
      <ProgressBarHeader>
        <HeaderTitle>Make new Group</HeaderTitle>
        <StepBar step={step} steps={steps} />
      </ProgressBarHeader>
      <Wrapper>
        <FormWrapper>
          <FormBoxWrapper>fsahdfkla</FormBoxWrapper>
          <FormFooter>
            {step > 1 ? <Button onClick={() => setStep(step - 1)}>Back</Button> : <span />}
            {renderedSubmitButton}
          </FormFooter>
        </FormWrapper>
      </Wrapper>
    </div>
  );
};

export default CreateGroup;

const HeaderTitle = styled.h2`
  ${fontType.lg}
  padding-bottom: ${spacer.lg};
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: ${spacer.xl};
`;

const ProgressBarHeader = styled.div`
  padding: ${spacer.xl};
`;

const FormWrapper = styled.div`
  max-width: ${sizes.md};
  margin: auto;
`;

const FormBoxWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius.md};
  padding: ${spacer.lg};
  margin-bottom: ${spacer.lg};
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
