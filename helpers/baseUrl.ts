export const getBaseUrl = (): string => {
  return process.env.API_BASE_URL || 'http://localhost:5000/api/v1';
};
