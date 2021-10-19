import { Button } from 'antd';
import logo from 'assets/images/logo.svg';
import config from 'config';
import NProgress from 'nprogress';
import { FC, useEffect } from 'react';
import { useStoreDispatch, useStoreSelector } from 'store';
import { getAppSate, updateRoute } from 'store/app/appSlice';

const App: FC = () => {
  const { routeChange } = useStoreSelector(getAppSate);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    NProgress.configure({ showSpinner: true });
    if (routeChange === 'start') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [routeChange]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href={config.backendURL} target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button
          size="large"
          className="px-4"
          type="primary"
          htmlType="submit"
          onClick={() => dispatch(updateRoute('complete'))}
        >
          Test Button
        </Button>
      </header>
    </div>
  );
};

export default App;
