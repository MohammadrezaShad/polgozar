import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { StepBar, Button } from 'components/elements';
import { colors, spacer, fontType, radius, sizes } from 'settings/style';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

interface StepItem {
  title: string;
  pageTitle: string;
  validation: string[];
  content: () => JSX.Element;
}
interface StepBarFormProps<T> {
  steps: StepItem[];
  form: FormInstance<any>;
  onFinish: (value: T) => void | Promise<void>;
  isLoading: boolean;
  pageTitle: string;
}

function StepBarForm<T>({ steps, onFinish, form, isLoading, pageTitle }: StepBarFormProps<T>) {
  const [step, setStep] = useState(1);

  const onNext = useCallback(async () => {
    try {
      const validation = steps[step - 1]?.validation;
      await form.validateFields(validation);
      if (step === steps.length) {
        form.submit();
      } else {
        setStep(step + 1);
      }
    } catch (err) {
      // err
    }
  }, [form, step, steps]);

  return (
    <Wrapper>
      <ProgressBarHeader>
        <HeaderTitle>{pageTitle}</HeaderTitle>
        <StepBar step={step} steps={steps} />
      </ProgressBarHeader>
      <ContentWrapper>
        <FormWrapper>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <FormBoxWrapper>
              {steps.map((item, index) => (
                <div style={{ display: index + 1 === step ? 'block' : 'none' }} key={item.title}>
                  <StepTitle>{item.pageTitle}</StepTitle>
                  {item.content()}
                </div>
              ))}
            </FormBoxWrapper>
          </Form>
          <FormFooter>
            {step > 1 && !isLoading ? <Button onClick={() => setStep(step - 1)}>Back</Button> : <span />}
            <Button onClick={onNext} isLoading={isLoading}>
              {step === steps.length ? 'Confirm' : 'Continue'}
            </Button>
          </FormFooter>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default StepBarForm;

const Wrapper = styled.div`
  width: 100%;
`;

const HeaderTitle = styled.h2`
  ${fontType.lg}
  padding-bottom: ${spacer.lg};
`;

const ContentWrapper = styled.div`
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
  padding: ${spacer.xl};
  margin-bottom: ${spacer.lg};
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StepTitle = styled.p`
  ${fontType.md};
  margin-bottom: ${spacer.xl};
`;
