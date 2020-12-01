import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGroupByIdSlugQuery } from 'graphql/types';

type MatchParams = { slug: string };
type SingleGroupProps = RouteComponentProps<MatchParams>;

export default function SingleGroup(props: SingleGroupProps) {
  const {
    match: {
      params: { slug },
    },
  } = props;

  const { loading, data: groupByIdSlugResult } = useGroupByIdSlugQuery({
    variables: { slug },
  });

  return (
    <div>
      Single Group {loading && 'loading...'}
      <pre>{JSON.stringify(groupByIdSlugResult, null, 4)}</pre>
    </div>
  );
}
