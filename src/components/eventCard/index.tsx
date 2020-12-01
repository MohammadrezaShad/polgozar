import React from 'react';
import styled from 'styled-components';
import { radius, colors, spacer, shadow, fontSize, fontType } from 'settings/style';
import { Button } from 'components/elements';
import { Link } from 'react-router-dom';
import { GetAllEventsQuery } from 'graphql/types';

interface EventCardProps {
  event: GetAllEventsQuery['events'][0];
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <GroupCardWrapper img={event.coverPhotoUrl || ''} to={`/events/${event.id}`}>
      <div className="img-cont" />
      <div className="content-cont">
        <h4 className="event-name">{event.title}</h4>
        {/* <h5>{event.categories[0].title}</h5> */}
        <div className="footer">
          <span className="event-members">
            <i className="icon-user" />
            {/* {group.members.length} */}
          </span>
          <Button color="accent" shape="opacity" onClick={(e?: React.MouseEvent) => e && e.preventDefault()}>
            Join Now
          </Button>
        </div>
      </div>
    </GroupCardWrapper>
  );
}

const GroupCardWrapper = styled(Link)<{ img: string }>`
  max-width: 500px;
  background-color: ${colors.white};
  height: 200px;
  display: flex;
  box-shadow: ${shadow.md};
  border-radius: ${radius.md};
  overflow: hidden;
  color: ${colors.font};
  &:hover {
    color: ${colors.font};
  }
  .img-cont {
    flex: 1;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content-cont {
    flex: 2;
    padding: ${spacer.md};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .event-name {
      ${fontType.md}
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .event-members {
        font-size: ${fontSize.lg};
        color: ${colors.primary};
        i {
          padding-right: ${spacer.md};
        }
      }
    }
  }
`;
