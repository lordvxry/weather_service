import { FC, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { ComingWeatherInfo } from '../../models/ComingWeatherModel';
import DailyWeatherCard from './DailyWeatherCard';
import DailyWeatherDropdown from './DailyWeatherDropdown';

interface Props {
  dailyWeatherData: ComingWeatherInfo[];
}

const DailyWeather: FC<Props> = ({ dailyWeatherData }) => {
  const [daysCount, setDaysCount] = useState(3);
  const filteredDailyWeatherData = dailyWeatherData.slice(0, daysCount);
  const handleNumDaysChange = (value: number) => {
    setDaysCount(value);
  };

  return (
    <Card>
      <Card.Header>
        <div className="d-flex align-items-center">
          <h5 className="me-auto">Daily Weather</h5>
          <DailyWeatherDropdown
            daysCount={daysCount}
            handleNumDaysChange={handleNumDaysChange}
          />
        </div>
      </Card.Header>
      <Card.Body>
        <Row xs={1} md={daysCount} className="g-4">
          {filteredDailyWeatherData.map((dayInfo) => (
            <DailyWeatherCard key={dayInfo.dt} weatherDayInfo={dayInfo} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DailyWeather;
