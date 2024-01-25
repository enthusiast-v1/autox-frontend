export type IMeta = {
  limit: number;
  page: number;
  size: number;
};

export type ResponseSuccessType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IRegisterResponse = {
  data: {
    id: string;
    email: string;
    role: string;
  };
  accessToken: string;
};
