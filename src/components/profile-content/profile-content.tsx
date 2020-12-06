import React from 'react';
import { Input, Form } from 'antd';

import { FormItem, Button } from 'components/elements';

import {
  StyledContent,
  StyledFormWrap,
  StyledTitle,
  StyledText,
  StyledButton,
  StyledButtonText,
  StyledFormHead,
  StyledHeadFormContent,
  StyledHeadFormTitle,
} from './profile-content.styled';

interface ProfileContentProps {
  editIntroduction: boolean;
  introduction?: string;
  introductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
interface FormFields {
  firstName: string;
  familyName: string;
  email: string;
  phoneNumber: string;
}
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 24 },
};

const ProfileContent = ({ editIntroduction, introduction, introductionChange }: ProfileContentProps) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = (values: FormFields) => {
    console.log('Received values of form:', values);
  };

  //   const handleChange = () => {
  //     // form.setFieldsValue({ sights: [] });
  //   };

  return (
    <>
      <StyledContent>
        <StyledTitle>Introduction</StyledTitle>
        {editIntroduction ? (
          <StyledText as={TextArea} onChange={introductionChange} defaultValue={introduction} />
        ) : (
          <StyledText>{introduction}</StyledText>
        )}
      </StyledContent>
      <StyledFormWrap>
        <StyledFormHead>
          <StyledHeadFormContent>
            <i className="icon-add-doc" />
            <StyledHeadFormTitle>Invitation</StyledHeadFormTitle>
          </StyledHeadFormContent>
        </StyledFormHead>
        <Form {...layout} form={form} onFinish={onFinish} labelAlign="left">
          <FormItem theme="primary" name="firstname" label="First Name">
            <Input />
          </FormItem>
          <FormItem theme="primary" name="familyName" label="Family Name">
            <Input />
          </FormItem>
          <FormItem theme="primary" name="email" label="E-mail">
            <Input />
          </FormItem>
          <FormItem theme="primary" name="phone" label="Phone Number">
            <Input />
          </FormItem>
          <StyledButton>
            <Button color="accent" size="lg" onClick={() => {}}>
              <StyledButtonText>Send Invitation </StyledButtonText>
            </Button>
          </StyledButton>
        </Form>
      </StyledFormWrap>
    </>
  );
};

export default ProfileContent;
