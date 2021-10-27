import { Button, Result } from 'antd';
import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: FC<FallbackProps> = ({ resetErrorBoundary }) => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={resetErrorBoundary}>
          Try again
        </Button>
      }
    />
  );
};
