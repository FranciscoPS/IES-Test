export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  exito?: boolean;
  mensaje?: string;
}
