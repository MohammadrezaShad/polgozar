import React, { useEffect, useState } from 'react';
import { useGetMyAccountQuery } from 'graphql/types';

import ButtonComponent from 'components/elements/button';
import ProfileDetails from 'components/profile-details';
import ProfileContent from 'components/profile-content';
import {
  StyledWrapper,
  StyledProfile,
  StyledHead,
  StyledContent,
  StyledBottom,
  StyledButtonText,
  StyledButtonWrap,
} from './profile.styled';

const testText =
  'Meet up and Social Time: 8:45 a.m. Walk Begins: 9:00 a.m. (Call if you are running late; change your RSVP to NO if you change your mind. Thanks.) This walk is suitable for ALL LEVELS of walkers, beginning to strong! Note: If this is your first time, and you have trouble finding Pelican Cove, call Walking Pelican Cove you will discover a beautiful ocean trail with wildflowers and jack rabbits . You will experiences with glorious morning views of ocean, bluffs, pelicans, and even sometimes dolphins and whales. We incorporate socializing into the walk. There’s a stop for coffee, drinks, snacks, etc. at the Sea Bean, a delightful This is truly a wonderful walk to start the day and have as part of your week! The Pelican Cove Parking Lot is 1200 feet to the west of the Terranea Way/Palos Verdes Drive South intersection first turn left into the Point Vicente Parking lot, turn around and exit the lot to the right. Go back along Palos past Point Vicente to the next lot. Once you find it the first time you’ll be fine. Leave yourself some extra time Terranea side. Look for astatue of a Pelican at the trail head.';

const ManageUsers = () => {
  const { data: myAccount } = useGetMyAccountQuery();
  const [editIntroduction, setEditIntroduction] = useState(false);
  const [introduction, setIntroduction] = useState(testText);
  const [introductionTemp, setIntroductionTemp] = useState(testText);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    location: '',
    birthday: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    if (myAccount) {
      setState({
        firstName: myAccount?.myAccount?.firstname,
        lastName: myAccount?.myAccount?.lastname,
        location: myAccount?.myAccount?.address?.city,
        birthday: '',
      });
    }
  }, [myAccount]);
  const editIntroductionHandler = (): void => {
    setIntroductionTemp(introduction);
    setEditIntroduction(true);
  };
  const discardIntroductionHandler = (): void => {
    setIntroductionTemp(testText);
    if (myAccount) {
      setState({
        firstName: myAccount?.myAccount?.firstname,
        lastName: myAccount?.myAccount?.lastname,
        location: myAccount?.myAccount?.address?.city,
        birthday: '',
      });
    }
    setEditIntroduction(false);
  };
  const saveIntroductionHandler = (): void => {
    setIntroduction(introductionTemp);
    setEditIntroduction(false);
  };
  const introductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroductionTemp(e.currentTarget.value);
  };
  return (
    <StyledWrapper>
      {/* {loading && 'loading ....'}
      <pre>{JSON.stringify(myAccount, undefined, 4)}</pre> */}
      <StyledHead>
        <ButtonComponent color="font" shape="opacity" onClick={editIntroductionHandler}>
          <StyledButtonWrap>
            <i className="icon-pen" />
            <StyledButtonText>Edit Profile</StyledButtonText>
          </StyledButtonWrap>
        </ButtonComponent>
        <StyledProfile>
          <ProfileDetails
            firstName={state.firstName}
            lastName={state.lastName}
            avatarUrl={myAccount?.myAccount?.avatarUrl}
            loaction={state.location}
            birthday={state.birthday}
            editIntroduction={editIntroduction}
            handleChange={handleChange}
          />
        </StyledProfile>
      </StyledHead>
      <StyledContent>
        <ProfileContent
          introductionChange={introductionChange}
          introduction={introduction}
          editIntroduction={editIntroduction}
        />
      </StyledContent>
      <StyledBottom>
        <ButtonComponent
          color="font"
          shape={!editIntroduction ? 'opacity' : 'outline'}
          disabled={!editIntroduction}
          onClick={discardIntroductionHandler}
        >
          Discard
        </ButtonComponent>
        <ButtonComponent disabled={!editIntroduction} shape="outline" onClick={saveIntroductionHandler}>
          Save Changes
        </ButtonComponent>
      </StyledBottom>
    </StyledWrapper>
  );
};

export default ManageUsers;
