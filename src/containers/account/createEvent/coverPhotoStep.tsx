import React from 'react';
import { FormItem } from 'components/elements';
import CoverPhoto from 'components/coverPhoto';

function CoverPhotoStep() {
  return (
    <FormItem
      name="coverPhoto"
      label=""
      theme="dark"
      noStyle
      rules={[{ required: true, message: 'Cover Photo is required!' }]}
    >
      <CoverPhoto />
    </FormItem>
  );
}

export default CoverPhotoStep;
