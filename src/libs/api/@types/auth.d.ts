export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export interface RegisterParams {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  token: string;
}
