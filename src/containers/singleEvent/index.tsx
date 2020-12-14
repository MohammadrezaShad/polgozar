import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGetEventByIdQuery, useUpdateEventMutation } from 'graphql/types';
import { Comments, SliderList as EventList } from 'components/elements';
import SingleEventList from 'components/userList';
import SingleEventHead from 'components/singleEventHead';
import SingleEventContent from 'components/singleEventContent';
import { ResizeImageResult } from 'helpers';
import { message } from 'antd';
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
  const [updateEvent, { loading }] = useUpdateEventMutation();

  const uploadPhoto = useCallback(
    (data: ResizeImageResult) => {
      const canUploadPhoto = false;
      if (canUploadPhoto) {
        try {
          updateEvent({
            variables: { input: { eventId: id, attributes: { photos: [data.blob] } } },
          });
        } catch (err) {
          message.error(err.message);
        }
      }
    },
    [id, updateEvent],
  );
  console.log(loading);
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
        <SingleEventAlbum photos={eventByIdResult?.event?.photos || []} onImport={uploadPhoto} />
      </StyledAlbum>
      <StyledEvents>
        <EventList photos={eventByIdResult?.event.photos || []} title="Relate Events" />
      </StyledEvents>
    </StyledWrapper>
  );
}
