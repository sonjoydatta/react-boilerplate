import { message } from 'antd';
import { useStoreDispatch } from 'store';
import { app } from 'store/actions';

export const useMessage = (key: string) => {
  const dispatch = useStoreDispatch();

  const showMessage = (msg?: string) => {
    dispatch(app.updateRoute('complete'));
    if (msg) {
      message.success({ content: msg, key });
    }
  };

  const showError = (error: string) => {
    dispatch(app.updateRoute('error'));
    message.error({ content: error, key });
  };

  /**
   * This function will be used to handle the error message or the
   * success message to be shown in the UI. It needs to be called
   * in the component that will be using the `useMessage` hook.
   */
  const APIRequest = (request: () => Promise<string | void>) => {
    dispatch(app.updateRoute('start'));
    request()
      .then((msg) => showMessage(msg as string | undefined))
      .catch((err) => showError(err.message));
  };

  return {
    showMessage,
    showError,
    APIRequest,
  };
};
