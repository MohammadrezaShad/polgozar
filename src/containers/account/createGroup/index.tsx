import React from 'react';
import { Form, message } from 'antd';
import { useCreateGroupMutation } from 'graphql/types';
import { useHistory } from 'react-router-dom';
import { ResizeImageResult, ParseGoogleAddressResult } from 'helpers';
import StepBarForm from 'components/stepBarForm';
import CoverPhotoStep from './coverPhotoStep';
import InformationStep from './informationStep';
import AddCategoriesStep from './addCategoriesStep';

interface FromFields {
  name: string;
  description: string;
  categoryIds: string[];
  coverPhoto: ResizeImageResult;
  address: ParseGoogleAddressResult;
}

const steps = [
  {
    title: 'Informations',
    pageTitle: 'Add Group Details',
    validation: ['name', 'description', 'address'],
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
  const [createGroupForm] = Form.useForm();
  const [createGroup, { loading: createGroupLoading }] = useCreateGroupMutation();
  const history = useHistory();

  const onFinish = async (values: FromFields) => {
    try {
      const result = await createGroup({
        variables: { input: { attributes: { ...values, coverPhoto: values.coverPhoto.blob } } },
      });
      const groupSlug = result.data?.createGroup?.group?.slug;
      if (groupSlug) {
        history.push(`/groups/${groupSlug}`);
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <StepBarForm
      pageTitle="Make new Group"
      form={createGroupForm}
      onFinish={onFinish}
      isLoading={createGroupLoading}
      steps={steps}
    />
  );
}

export default CreateGroup;
