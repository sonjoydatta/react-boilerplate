import { message } from 'antd';
import { useStoreDispatch } from 'store';
import { app } from 'store/actions';

export const useMessage = (key: string) => {
  const dispatch = useStoreDispatch();

  const loaderStart = () => {
    message.loading({ content: 'Loading...', key });
    dispatch(app.updateRoute('start'));
  };

  const loaderSuccess = () => {
    message.success({ content: 'Loaded!', key, duration: 1 });
    dispatch(app.updateRoute('complete'));
  };

  const errorMessage = (error: string) => {
    message.error({ content: error, key });
    dispatch(app.updateRoute('error'));
  };

  return {
    loaderStart,
    loaderSuccess,
    errorMessage,
  };
};
