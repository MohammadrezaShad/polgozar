import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useGetAllCategoriesQuery } from 'graphql/types';
import { StepBar, Button, FormItem } from 'components/elements';
import { colors, spacer, fontType, radius, sizes } from 'settings/style';
import DetailedCheckbox from 'components/detailedCheckbox';
import CoverPhoto from 'components/coverPhoto';

import { Input, Form } from 'antd';

const steps = [{ title: 'Choose Categories' }, { title: 'Add Cover Photo' }, { title: 'Add Informations' }];

function CreateGroup() {
  const [step, setStep] = useState(1);
  const { data } = useGetAllCategoriesQuery();
  const [createGroupForm] = Form.useForm();

  const categories = useMemo(
    () =>
      data?.categories
        ? data?.categories.map(({ id, description, title }) => ({ value: id, label: title, description }))
        : [],
    [data],
  );

  const renderedSubmitButton = useMemo(() => {
    let buttonText = 'Continue';
    const buttonAction = () => setStep(step + 1);
    if (step === steps.length) {
      buttonText = 'Confirm';
    }
    return <Button onClick={buttonAction}>{buttonText}</Button>;
  }, [step]);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <ProgressBarHeader>
        <HeaderTitle>Make new Group</HeaderTitle>
        <StepBar step={step} steps={steps} />
      </ProgressBarHeader>
      <Wrapper>
        <FormWrapper>
          <Form layout="vertical" form={createGroupForm} onFinish={onFinish} preserve={false}>
            <FormBoxWrapper>
              <FormItem
                name="coverPhoto"
                label=""
                theme="dark"
                noBackground
                rules={[{ required: true, message: 'Cover Photo is required!' }]}
              >
                <CoverPhoto />
              </FormItem>
              <FormItem
                name="title"
                label="Title"
                theme="primary"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input placeholder="Enter Your Group Title" />
              </FormItem>
              <FormItem
                name="categories"
                label=""
                theme="dark"
                noBackground
                rules={[{ required: true, message: 'Categories is required!' }]}
              >
                <DetailedCheckbox options={categories} />
              </FormItem>
            </FormBoxWrapper>
            <FormFooter>
              {step > 1 ? <Button onClick={() => setStep(step - 1)}>Back</Button> : <span />}
              {renderedSubmitButton}
            </FormFooter>
          </Form>
        </FormWrapper>
      </Wrapper>
    </div>
  );
}

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
