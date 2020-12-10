import React from 'react';
import { Form, message } from 'antd';
import { useCreateEventMutation } from 'graphql/types';
import { useHistory } from 'react-router-dom';
import { ResizeImageResult, ParseGoogleAddressResult } from 'helpers';
import StepBarForm from 'components/stepBarForm';
import CoverPhotoStep from './coverPhotoStep';
import InformationStep from './informationStep';
import AddCategoriesStep from './addCategoriesStep';

interface FromFields {
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  groupId: string;
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
  const [form] = Form.useForm();
  const [createEvent, { loading }] = useCreateEventMutation();
  const history = useHistory();

  const onFinish = async (values: FromFields) => {
    const attributes = { ...values, coverPhoto: values.coverPhoto.blob };
    try {
      const result = await createEvent({
        variables: { input: { attributes } },
      });
      const eventId = result.data?.createEvent?.event?.id;
      if (eventId) {
        history.push(`/events/${eventId}`);
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  return <StepBarForm pageTitle="Make new Event" form={form} onFinish={onFinish} isLoading={loading} steps={steps} />;
}

export default CreateGroup;
