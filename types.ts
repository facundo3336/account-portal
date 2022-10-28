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

export interface FilterProps {
  filterName: string;
  multiple: boolean;
  items: {
    id: string;
    label: string;
  }[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
}
