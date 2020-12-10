import React, { useRef, useCallback, useEffect, useState } from 'react';
import { loadMapApi, parseGoogleAddress, ParseGoogleAddressResult } from 'helpers';

interface SearchBoxProps {
  placeholder?: string;
  onChange?: (place: ParseGoogleAddressResult) => void;
}

function SearchBox({ onChange = () => {}, placeholder = 'Please Enter your Address ...' }: SearchBoxProps) {
  const input = useRef<HTMLInputElement>(null);
  const searchBox = useRef<any>();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const onPlacesChanged = useCallback(() => {
    const places = searchBox.current.getPlaces();
    const result = parseGoogleAddress(places[0]);
    if (result) {
      onChange(result);
    }
  }, [onChange]);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
      setScriptLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (scriptLoaded && input.current) {
      searchBox.current = new google.maps.places.SearchBox(input.current);
      searchBox.current.addListener('places_changed', onPlacesChanged);
    }
  }, [onPlacesChanged, scriptLoaded]);

  return <input ref={input} placeholder={placeholder} type="text" />;
}

export default SearchBox;
