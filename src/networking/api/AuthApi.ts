import {errorHandler, responseHandler} from '../../utils';
import {AccountsApi} from '../ApiClient';
import {BASE_URL, URLS} from '../endpoints';

const AuthApi = {
  login: async (body: {user_mobile: string; country_code: string}) => {
    try {
      const response = await AccountsApi.post(URLS.AUTH.LOGIN, body);

      return responseHandler(response);
    } catch (error) {
      console.log('Authapi Login error', error);
      return errorHandler(error);
    }
  },
  otp: async (body: {
    user_mobile: string;
    country_code: string;
    mobile_otp: string;
  }) => {
    try {
      const response = await AccountsApi.post(URLS.AUTH.OTPVERIFY, body);

      return responseHandler(response);
    } catch (error) {
      console.log('Authapi Otp error', error);
      return errorHandler(error);
    }
  },
  refreshAccessToken: async (token: string) => {
    try {
      const response = await AccountsApi.post(URLS.AUTH.REGENERATEAUTHTOKEN, {
        token,
      });

      return responseHandler(response);
    } catch (error) {
      return errorHandler(error);
    }
  },
};

export default AuthApi;
