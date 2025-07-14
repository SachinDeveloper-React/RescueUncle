const isProduction = false;
export const BASE_URL = isProduction
  ? ''
  : 'https://accounts.rescueuncle.in/accounts';
export const SERVICE_URL = isProduction
  ? ''
  : 'https://services.rescueuncle.in';

export const DELIVERY_AGENT = 'delivery-agent';
export const SERVICE_AGENT = 'services';
export const URLS = {
  AUTH: {
    LOGIN: `/${DELIVERY_AGENT}/login`,
    OTPVERIFY: `/${DELIVERY_AGENT}/login-validate-otp`,
    REGENERATEAUTHTOKEN: `/regenerate-token`,
  },
  PROFILE: {
    GETPROFILEDETAILS: `/${DELIVERY_AGENT}/profile`,
    GETVEHICLEDETAILS: `/vehicle`,
    GETBANKDETAILSDETAILS: `/${DELIVERY_AGENT}/bank-account`,
    UPDATEPROFILEDETAILS: `/${DELIVERY_AGENT}/profile`,
    UPDATEVEHICLEDETAILS: `/vehicle`,
    UPDATEBANKDETAILS: `/${DELIVERY_AGENT}/bank-account`,
    PROFILEVALIDATION: `/${DELIVERY_AGENT}/profile-validation`,
  },
  SERVICES: {
    GETSERVICES: `/${SERVICE_AGENT}/delivery-services`,
  },
};
