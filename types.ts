export interface User {
  email: string;
  username?: string;
  password: string;
}

export interface Token {
  access_token: string;
}
