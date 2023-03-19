import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

interface LocationInputProps {
  onLocationChange: (location: string) => void;
}

const LocationInput: FC<LocationInputProps> = ({ onLocationChange }) => {
  const [locationValue, setLocationValue] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationValue(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const location = locationValue.trim();
    if (!location) return;
    onLocationChange(location);
    setLocationValue('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Enter location..."
          value={locationValue}
          onChange={handleInputChange}
        />
        <InputGroup.Text>
          <Button variant="link" type="submit">
            <FontAwesomeIcon icon="search" />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default LocationInput;
