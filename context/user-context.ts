import React from "react";
import { User } from "../types";

interface IUserContext {
  user?: User;
  setUser: (user: User) => void;
  setAccessToken: (accessToken?: string) => void;
}

export const UserContext = React.createContext({} as IUserContext);
