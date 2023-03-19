import { FC } from 'react';
import { Spinner } from 'react-bootstrap';

const Loader: FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Spinner animation="border" variant="primary" role="status" />
    </div>
  );
};

export default Loader;
