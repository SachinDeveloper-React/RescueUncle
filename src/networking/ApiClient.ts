import {createApiClient} from './apiClientFactory';
import {BASE_URL, SERVICE_URL} from './endpoints';

export const AccountsApi = createApiClient({baseURL: BASE_URL});
export const ServiceApi = createApiClient({baseURL: SERVICE_URL});
// export const adminApi = createApiClient({ baseURL: ADMIN_URL });
