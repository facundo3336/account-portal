import Router from "next/router";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
}

export const LoggedIn = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token") as string;
    const decoded = jwt_decode<{ exp: number }>(token);

    const tokenExpiresAt = new Date(decoded.exp * 1000);
    const now = new Date();

    if (tokenExpiresAt > now) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      Router.push("/login");
    }
  }, [loggedIn]);

  if (loggedIn) {
    return children;
  }

  return null;
};
