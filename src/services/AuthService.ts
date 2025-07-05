import {AuthApi} from '../networking';

export const sendOtp = async (user_mobile: string, country_code: string) => {
  const body = {
    user_mobile,
    country_code,
  };

  const res = await AuthApi.login(body);
  if (res.code === 400 && Array.isArray(res.data?.user_mobile)) {
    return {
      status: res.code,
      msg: res.data.user_mobile.join(),
      error: true,
    };
  } else if (res.code === 400 && Array.isArray(res.data?.country_code)) {
    return {
      status: res.code,
      msg: res.data.country_code.join(),
      error: true,
    };
  } else {
    return {
      status: res.code,
      msg: res.data,
      error: false,
    };
  }
};

export const verifyOtp = async (
  user_mobile: string,
  country_code: string,
  mobile_otp: string,
) => {
  const body = {
    user_mobile,
    country_code,
    mobile_otp,
  };
  const res = await AuthApi.otp(body);

  if (res.code === 400 && Array.isArray(res.data?.mobile_otp)) {
    return {
      status: res.code,
      data: res.data.mobile_otp.join(),
      error: true,
    };
  } else if (res.code === 400 && Array.isArray(res.data?.country_code)) {
    return {
      status: res.code,
      data: res.data.country_code.join(),
      error: true,
    };
  } else if (res.code == 400 && res.data?.mobile_otp) {
    return {
      status: res.code,
      data: res.data.mobile_otp,
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
