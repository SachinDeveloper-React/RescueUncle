// src/utils/handleApiResponse.ts

interface ApiResponse {
  code?: number;
  error?: boolean;
  data?: any;
}

export const handleApiResponse = (
  res: ApiResponse,
): {message: string; code: number} => {
  // 1. If there's an error flag and data has error messages
  if (res.error && res.data) {
    const errorField = Object.keys(res.data)[0]; // e.g., 'country_code' or 'user_mobile'
    const errorMessages = res.data[errorField];

    if (Array.isArray(errorMessages)) {
      return {
        message: errorMessages[0], // Return first error message
        code: res.code ?? 400,
      };
    }

    return {
      message: 'Something went wrong.',
      code: res.code ?? 400,
    };
  }

  // 2. If success and user_mobile is available
  if (res.code === 200 && Array.isArray(res.data?.user_mobile)) {
    return {
      message: res.data.user_mobile.join(), // Join array if needed
      code: 200,
    };
  }

  // 3. If success and message exists
  if (res.code === 200 && typeof res.data?.message === 'string') {
    return {
      message: res.data.message,
      code: 200,
    };
  }

  // 4. Fallback for unknown formats
  return {
    message: 'Unexpected response format.',
    code: res.code ?? 500,
  };
};
