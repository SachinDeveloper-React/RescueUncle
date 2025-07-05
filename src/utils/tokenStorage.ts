import * as Keychain from 'react-native-keychain';

const CREDENTIALS_KEY = 'auth_credentials';

export const storeTokens = async (
  accessToken: string,
  refreshToken: string,
) => {
  await Keychain.setGenericPassword(
    'auth',
    JSON.stringify({accessToken, refreshToken}),
    {
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
      accessControl: Keychain.ACCESS_CONTROL.USER_PRESENCE, // optional biometric prompt
    },
  );
};

export const getTokens = async (): Promise<{
  accessToken: string;
  refreshToken: string;
} | null> => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    try {
      return JSON.parse(credentials.password);
    } catch {
      return null;
    }
  }
  return null;
};

export const getAccessToken = async (): Promise<string | null> => {
  const tokens = await getTokens();
  return tokens?.accessToken || null;
};

export const getRefreshToken = async (): Promise<string | null> => {
  const tokens = await getTokens();
  return tokens?.refreshToken || null;
};

export const clearTokens = async () => {
  await Keychain.resetGenericPassword();
};
