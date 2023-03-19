import { mapUrls } from '../constants/mapUrls';
import { MapUrlModel } from '../models/MapUrlModel';
import L from 'leaflet';

export const getMapsData = async () => {
  const mapsData = mapUrls.map(({ name, url }: MapUrlModel) => {
    return L.tileLayer(url, {
      maxZoom: 13,
      tileSize: 512,
      zoomOffset: -1,
      attribution: `${name} data © OpenWeatherMap`,
    });
  });
  return await Promise.all(mapsData);
};
