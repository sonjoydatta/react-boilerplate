import { NonAuthLayout } from 'components/layouts';
import { Containers } from 'containers';

const SignIn = () => {
  return (
    <NonAuthLayout>
      <Containers.SignIn />
    </NonAuthLayout>
  );
};

export default SignIn;
