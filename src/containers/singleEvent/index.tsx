import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetEventByIdQuery } from 'graphql/types';

type MatchParams = { id: string };
type SingleEventProps = RouteComponentProps<MatchParams>;

export default function SingleEvent(props: SingleEventProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const { loading, data: eventByIdResult } = useGetEventByIdQuery({
    variables: { id },
  });

  return (
    <div>
      Single Event {loading && 'loading...'}
      <pre>{JSON.stringify(eventByIdResult, null, 4)}</pre>
    </div>
  );
}
