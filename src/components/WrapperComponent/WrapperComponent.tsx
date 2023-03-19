import { FC } from 'react';
import Loader from '../../assets/UI/Loader/Loader';
import Error from '../Error/Error';

interface WrapperComponentProps {
  isLoading: boolean;
  error: {
    message: string | null;
    child: JSX.Element | null;
  };
  children: JSX.Element;
}

export const WrapperComponent: FC<WrapperComponentProps> = ({
  isLoading,
  error,
  children,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error.message) {
    return (
      <>
        {error.child}
        <Error message={error.message} />
      </>
    );
  }

  return <>{children}</>;
};
