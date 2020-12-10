/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
// AIzaSyBXsNmtDJ1Iq870UOGv8rk-fmvXOfwvqSU
import GoogleMapReact from 'google-map-react';
import { StyledContent, StyledContentWrap, StyledContentTitle, StyledAddress, StyledMap } from './location.styled';
import Marker from './marker';

interface LocationProps {
  zoom?: number;
  loactionDetail?: { address: string; lat: number; lng: number; city?: string };
  mapSize?: 'md' | 'lg';
}
const Location = ({ zoom = 17, loactionDetail, mapSize = 'lg' }: LocationProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const handleApiLoaded = () => {
    setMapLoaded(true);
  };
  console.log(process.env);
  return (
    <>
      <StyledContent mapSize={mapSize}>
        <StyledContentWrap>
          <i className="icon-pin" />
          <StyledContentTitle>{loactionDetail?.city}</StyledContentTitle>
        </StyledContentWrap>
        <StyledAddress>{loactionDetail?.address}</StyledAddress>
      </StyledContent>
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          center={{ lat: loactionDetail?.lat, lng: loactionDetail?.lng }}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={() => handleApiLoaded()}
        >
          <Marker mapLoaded={mapLoaded} lat={loactionDetail?.lat} lng={loactionDetail?.lng} name="My Marker" />
        </GoogleMapReact>
      </StyledMap>
    </>
  );
};

export default Location;
