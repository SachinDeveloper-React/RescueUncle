import axios from 'axios';

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return {
      code: error.response?.status || error?.status || 500,
      status: false,
      data:
        error.response?.data ||
        error?.message ||
        'An unexpected error occurred',
      error: true,
    };
  }

  return {
    code: 500,
    status: false,
    data: 'An unexpected error occurred',
    error: true,
  };
};
