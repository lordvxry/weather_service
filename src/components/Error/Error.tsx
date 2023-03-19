import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return (
    <div className="alert alert-danger text-center">
      <FontAwesomeIcon icon="triangle-exclamation" size="3x" />
      <p className="mt-3 mb-0">{message}</p>
    </div>
  );
};

export default Error;
