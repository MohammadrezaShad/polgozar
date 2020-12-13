import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useGroupByIdSlugQuery } from 'graphql/types';
import SingleGroupHead from 'components/singleGroupHead';
import SingleGroupContent from 'components/singleGroupContent';
import SingleGroupBottom from 'components/singleGroupBottom';
import { Tabs } from 'components/elements';
import { StyledWrapper, StyledLayout, StyledTabs, StyledContent, StyledWrap } from './index.styled';

type MatchParams = { slug: string };
type SingleGroupProps = RouteComponentProps<MatchParams>;

export default function SingleGroup(props: SingleGroupProps) {
  const {
    match: {
      params: { slug },
    },
  } = props;

  const { data: groupByIdSlugResult } = useGroupByIdSlugQuery({
    variables: { slug },
  });
  const [selectedTab, setSelectedTab] = useState('#aboutGroup');
  const clickHandler = (path: string) => {
    setSelectedTab(path);
  };

  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledWrap>
          <StyledTabs>
            <Tabs
              items={[
                { text: 'About Group', path: '#aboutGroup' },
                { text: 'Up Coming Events', path: '#upCommingEvents' },
                { text: 'Past Events', path: '#pastEvents' },
                { text: 'Members', path: '#members' },
              ]}
              width="105px"
              height="200px"
              selectedTab={selectedTab}
              onClick={clickHandler}
              refTag
            />
            <div />
          </StyledTabs>
          <StyledContent>
            <SingleGroupHead
              coverPhotoUrl={groupByIdSlugResult?.group?.coverPhotoUrl}
              description={groupByIdSlugResult?.group?.description}
              members={groupByIdSlugResult?.group?.members}
              organizers={groupByIdSlugResult?.group?.organizers}
              city={groupByIdSlugResult?.group?.address?.city}
              name={groupByIdSlugResult?.group?.name}
              slug={groupByIdSlugResult?.group?.slug}
            />
            <SingleGroupContent events={groupByIdSlugResult?.group?.events} />
            <SingleGroupBottom name={groupByIdSlugResult?.group?.name} slug={groupByIdSlugResult?.group?.slug} />
          </StyledContent>
        </StyledWrap>
      </StyledLayout>
    </StyledWrapper>
  );
}
