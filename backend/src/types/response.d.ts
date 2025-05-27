declare interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}

declare interface IError {
  success: boolean;
  message: string;
}
