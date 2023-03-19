import { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
  daysCount: number;
  handleNumDaysChange: (num: number) => void;
}

const DailyWeatherDropdown: FC<Props> = ({ daysCount, handleNumDaysChange }) => {
  const daysArr = [3, 4, 5, 6];

  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="secondary"
      menuVariant="dark"
      title={`Show ${daysCount} Days`}
      className="ms-auto"
    >
      {daysArr.map((num) => (
        <Dropdown.Item key={`days_${num}`} onClick={() => handleNumDaysChange(num)}>
          Show {num} Days
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DailyWeatherDropdown;
