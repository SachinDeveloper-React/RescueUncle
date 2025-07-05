import {createApiClient} from './apiClientFactory';
import {BASE_URL} from './endpoints';

export const AccountsApi = createApiClient({baseURL: BASE_URL});
// export const authApi = createApiClient({ baseURL: AUTH_URL });
// export const adminApi = createApiClient({ baseURL: ADMIN_URL });
