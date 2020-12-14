import React from 'react';
import { Form, message } from 'antd';
import { useCreateEventMutation } from 'graphql/types';
import { useHistory } from 'react-router-dom';
import { ResizeImageResult, ParseGoogleAddressResult } from 'helpers';
import StepBarForm from 'components/stepBarForm';
import moment from 'moment';
import CoverPhotoStep from './coverPhotoStep';
import InformationStep from './informationStep';

interface FromFields {
  title: string;
  dates: moment.Moment[];
  description: string;
  groupId: string;
  coverPhoto: ResizeImageResult;
  address: ParseGoogleAddressResult;
}

const steps = [
  {
    title: 'Informations',
    pageTitle: 'Add Event Details',
    validation: ['title', 'description', 'address', 'groupId', 'dates'],
    content: InformationStep,
  },

  { title: 'Cover Photo', pageTitle: 'Add Cover Photo', validation: ['coverPhoto'], content: CoverPhotoStep },
];

function CreateGroup() {
  const [form] = Form.useForm();
  const [createEvent, { loading }] = useCreateEventMutation();
  const history = useHistory();

  const onFinish = async (values: FromFields) => {
    const { dates, ...restValues } = values;
    const attributes = {
      ...restValues,
      coverPhoto: values.coverPhoto.blob,
      startTime: dates[0],
      endTime: dates[1],
    };

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
