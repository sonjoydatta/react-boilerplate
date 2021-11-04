export namespace Auth {
  export interface SignInBody {
    email: string;
    password: string;
  }

  export interface SignIn {
    token: string;
  }

  export interface RegisterBody {
    email: string;
    password: string;
  }

  export interface Register {
    id: number;
    token: string;
  }
}
