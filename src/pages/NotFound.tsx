import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';
import { PRIVATE_ROUTE } from 'routes';

const NotFound = () => {
  const history = useHistory();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.push(PRIVATE_ROUTE.DASHBOARD)}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
