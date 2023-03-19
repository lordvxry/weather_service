import { FC } from 'react';
import { WeatherWidget } from '../../modules/WeatherWidget';

const MainPage: FC = () => {
  return (
    <div className="p-4">
      <WeatherWidget />
    </div>
  );
};

export default MainPage;
