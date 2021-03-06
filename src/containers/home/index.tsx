import React from 'react';
import styled from 'styled-components';
import { HeroImage, Container, Button } from 'components/elements';
import BgImage from 'assets/images/intro_bg.jpg';
import { Row, Col, Skeleton } from 'antd';
import { colors, fontType, snippet, spacer, rgba, media } from 'settings/style';
import GroupCard from 'components/groupCard';
import EventCard from 'components/eventCard';
import { useGetAllGroupsQuery, useGetAllEventsQuery } from 'graphql/types';
import { v4 } from 'uuid';

import CategoriesList from './categories/categoriesList';

const Home = () => {
  const { data: groupsResult } = useGetAllGroupsQuery();
  const { data: eventsResult } = useGetAllEventsQuery();
  return (
    <HomeWrapper>
      <div style={{ display: 'relative' }}>
        <HeroImage img={BgImage} overlay>
          <div className="hero-content">
            <h1 className="head-first">The way in the world is just one,</h1>
            <h1 className="head-second">
              and that way is <span>TRUTH</span>.
            </h1>
            <Button className="join-us-btn" onClick={() => {}}>
              JOIN US
            </Button>
          </div>
        </HeroImage>
        <CategoriesList />
      </div>

      <ContentContainer>
        <Container>
          <div className="row-cont">
            <h3>Popular Groups</h3>
            <Row gutter={[24, 24]}>
              {[...Array(3)].map((_, index) => {
                const item = groupsResult?.groups[index];
                return (
                  <Col xs={24} md={8} key={v4()}>
                    {item ? <GroupCard group={item} /> : <LoadingCards />}
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="row-cont">
            <h3>Popular Events</h3>
            <Row gutter={[24, 24]}>
              {[...Array(3)].map((_, index) => {
                const item = eventsResult?.events[index];
                return (
                  <Col xs={24} md={8} key={v4()}>
                    {item ? <EventCard event={item} /> : <LoadingCards />}
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </ContentContainer>
    </HomeWrapper>
  );
};
export default Home;

function LoadingCards() {
  return <Skeleton active title={false} avatar={{ shape: 'square' }} paragraph={{ rows: 4 }} />;
}

const ContentContainer = styled.div`
  background-color: ${colors.gray200};
  padding: ${spacer.lg} 0;
  h3 {
    ${fontType.lg}
    ${snippet.underline()}
  }
  .row-cont {
    margin-bottom: ${spacer.xl};
  }
`;

const HomeWrapper = styled.div`
  .hero-content {
    font-size: 15px;
    ${media.md`
      font-size: 14px;
      padding: 0 ${spacer.lg};
    `}
    ${media.xs`
      font-size: 11px;
    `}
    text-align: center;
    margin-bottom: 22em;
    .head-first {
      color: ${colors.white};
      font-size: 2em;
      font-weight: 600;
      margin-bottom: 0;
    }
    .head-second {
      color: ${colors.white};
      font-size: 3em;
      font-weight: 700;
      span {
        color: ${colors.accent};
      }
    }
    .join-us-btn {
      width: 54%;
      padding: 1em 0em;
      margin-top: 1.5em;
      color: ${colors.white};
      backdrop-filter: blur(10px);
      background-color: ${rgba(colors.accent, 0.3)};
      &:hover {
        border-color: ${colors.accent};
        background-color: ${rgba(colors.accent, 1)};
      }
    }
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 1.7em;
      height: 1.5px;
      left: 0;
      background: linear-gradient(
        to right,
        ${rgba(colors.white, 0)},
        ${rgba(colors.accent, 1)},
        ${rgba(colors.white, 0)}
      );
    }
  }
`;
