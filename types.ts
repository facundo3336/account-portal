export interface User {
  email: string;
  username?: string;
  password: string;
}

export interface Token {
  access_token: string;
}

export interface QuestionnaireData {
  question: string;
  description: string;
  options: {
    title: string;
    description?: string;
  }[];
}
