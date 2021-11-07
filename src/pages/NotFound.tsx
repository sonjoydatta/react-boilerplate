import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from 'routes';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate(ROUTE_PATHS.DASHBOARD)}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
