import React, { useMemo } from 'react';
import { FormItem } from 'components/elements';
import DetailedCheckbox from 'components/detailedCheckbox';
import { useGetAllCategoriesQuery } from 'graphql/types';

function AddCategoriesStep() {
  const { data } = useGetAllCategoriesQuery();

  const categories = useMemo(
    () =>
      data?.categories
        ? data?.categories.map(({ id, description, title }) => ({ value: id, label: title, description }))
        : [],
    [data],
  );

  return (
    <FormItem name="categoryIds" label="" noStyle rules={[{ required: true, message: 'Categories is required!' }]}>
      <DetailedCheckbox options={categories} />
    </FormItem>
  );
}

export default AddCategoriesStep;
