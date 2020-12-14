import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetEventByIdQuery } from 'graphql/types';

import { Comments, SliderList as EventList } from 'components/elements';
import SingleEventList from 'components/userList';
import SingleEventHead from 'components/singleEventHead';
import SingleEventContent from 'components/singleEventContent';
import {
  StyledWrapper,
  StyledHead,
  StyledContent,
  StyledList,
  StyledComments,
  StyledAlbum,
  StyledEvents,
} from './index.styled';
import SingleEventAlbum from '../../components/singleEventAlbum';

type MatchParams = { id: string };
type SingleEventProps = RouteComponentProps<MatchParams>;

export default function SingleEvent(props: SingleEventProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const { data: eventByIdResult } = useGetEventByIdQuery({
    variables: { id },
  });

  return (
    <StyledWrapper>
      {/* Single Event {loading && 'loading...'} */}
      {/* <pre>{JSON.stringify(eventByIdResult, null, 4)}</pre> */}
      <StyledHead>
        <SingleEventHead
          address={eventByIdResult?.event.address}
          coverPhotoUrl={eventByIdResult?.event?.coverPhotoUrl}
          title={eventByIdResult?.event?.title}
        />
      </StyledHead>
      <StyledContent>
        <SingleEventContent
          address={eventByIdResult?.event.address}
          coverPhotoUrl={eventByIdResult?.event?.coverPhotoUrl}
          description={eventByIdResult?.event?.description}
        />
      </StyledContent>
      <StyledList>
        <SingleEventList size={2} bgColor="primary" title="Attended list" />
      </StyledList>
      <StyledList>
        <SingleEventList size={3} bgColor="accent100" title="Donated list" />
      </StyledList>
      <StyledComments>
        <Comments />
      </StyledComments>
      <StyledAlbum>
        <SingleEventAlbum photos={eventByIdResult?.event?.photos || []} />
      </StyledAlbum>
      <StyledEvents>
        <EventList photos={eventByIdResult?.event.photos || []} title="Relate Events" />
      </StyledEvents>
    </StyledWrapper>
  );
}
