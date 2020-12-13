import { SliderList } from 'components/elements';
import UserList from 'components/userList';
import React from 'react';

import { StyledWrapper, StyledContent } from './singleGroupContent.styled';

interface Photos {
  id?: string;
  url?: string;
  coverPhotoUrl?: string;
}
interface SingleGroupContentProp {
  events?: Photos[];
}
const SingleGroupContent = ({ events = [] }: SingleGroupContentProp) => {
  return (
    <StyledWrapper>
      <StyledContent id="upCommingEvents">
        <SliderList photos={events} title="New events Comming up" />
      </StyledContent>
      <StyledContent id="pastEvents">
        <SliderList photos={events} title="Past events" />
      </StyledContent>
      <StyledContent id="members">
        <UserList size={3} bgColor="primary" title="Members" />
      </StyledContent>
    </StyledWrapper>
  );
};

export default SingleGroupContent;
