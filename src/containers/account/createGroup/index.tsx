import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { StepBar, Button } from 'components/elements';
import { colors, spacer, fontType, radius, sizes } from 'settings/style';
import { Form } from 'antd';
import CoverPhotoStep from './coverPhotoStep';
import InformationStep from './informationStep';
import AddCategoriesStep from './addCategoriesStep';

const steps = [
  {
    title: 'Informations',
    pageTitle: 'Add Group Details',
    validation: ['name', 'description'],
    content: InformationStep,
  },
  {
    title: 'Categories',
    pageTitle: 'Select related categories',
    validation: ['categoryIds'],
    content: AddCategoriesStep,
  },

  { title: 'Cover Photo', pageTitle: 'Add Cover Photo', validation: ['coverPhoto'], content: CoverPhotoStep },
];

function CreateGroup() {
  const [step, setStep] = useState(1);
  const [createGroupForm] = Form.useForm();

  const onNext = useCallback(() => {
    const validation = steps[step - 1]?.validation;
    const action = step === steps.length ? createGroupForm.submit : () => setStep(step + 1);
    createGroupForm.validateFields(validation).then(action);
  }, [createGroupForm, step]);

  const onFinish = (values: any) => {
    console.log({ ...values, coverPhoto: values.coverPhoto.blob }, 'iiiooooooo');
    // createGroupForm.submit();
  };

  return (
    <Wrapper>
      <ProgressBarHeader>
        <HeaderTitle>Make new Group</HeaderTitle>
        <StepBar step={step} steps={steps} />
      </ProgressBarHeader>
      <ContentWrapper>
        <FormWrapper>
          <Form layout="vertical" form={createGroupForm} onFinish={onFinish}>
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
            {step > 1 ? <Button onClick={() => setStep(step - 1)}>Back</Button> : <span />}
            <Button onClick={onNext}>{step === steps.length ? 'Confirm' : 'Continue'}</Button>
          </FormFooter>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CreateGroup;

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
