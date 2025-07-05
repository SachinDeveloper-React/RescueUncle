import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {storeTokens, getRefreshToken, clearTokens} from '../utils/tokenStorage';
import {AccountsApi, URLS} from '../networking';
import {zustandMMKVStorage} from './storage';

type AuthState = {
  user: any | null;
  isAuthenticated: boolean;
  isProfileCompleted: boolean;
  login: (
    accessToken: string,
    refreshToken: string,
    user: any,
    profile: boolean,
  ) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isProfileCompleted: false,

      login: async (accessToken, refreshToken, user, profileComplete) => {
        await storeTokens(accessToken, refreshToken);
        set({user, isAuthenticated: true, isProfileCompleted: profileComplete});
      },

      logout: async () => {
        await clearTokens();
        set({user: null, isAuthenticated: false});
      },

      refreshAccessToken: async () => {
        const refreshToken = await getRefreshToken();
        if (!refreshToken) return false;

        try {
          const res = await AccountsApi.post(URLS.AUTH.REGENERATEAUTHTOKEN, {
            refreshToken,
          });
          const {accessToken, user} = res.data;
          await storeTokens(accessToken, refreshToken);
          set({user, isAuthenticated: true});
          return true;
        } catch (err) {
          await get().logout();
          return false;
        }
      },
    }),
    {
      name: 'auth-store',
      storage: zustandMMKVStorage,
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isProfileCompleted: state.isProfileCompleted,
      }),
    },
  ),
);
