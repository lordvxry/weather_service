import React, { FC, useEffect, useState } from 'react';
import './WeatherMaps.css';
import { Carousel } from 'react-bootstrap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationInfoModel } from '../../models/LocationInfoModel';
import { getMapsData } from '../../api/getMapsData';

interface Props {
  location: LocationInfoModel | null;
}

const WeatherMaps: FC<Props> = ({ location }) => {
  const [maps, setMaps] = useState<L.Layer[]>([]);

  useEffect(() => {
    if (location) getMapsData().then((res) => setMaps(res));
  }, [location]);

  useEffect(() => {
    maps.forEach((map, index) => {
      const element = document.getElementById(`map-${index}`);
      if (element && !element.hasChildNodes()) {
        const leafletMap = L.map(element).setView([0, 0], 2);
        map.addTo(leafletMap);
        leafletMap.invalidateSize();
      }
    });
  }, [maps]);

  return (
    <Carousel>
      {maps.map((map, index) => (
        <Carousel.Item key={index}>
          <div id={`map-${index}`} className="weather-map"></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default WeatherMaps;
