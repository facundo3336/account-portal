import { useEffect, useState } from "react";
import { getUser } from "../../api/users";
import { User } from "../../types";
import { UserContext } from "../user-context";

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    if (user === undefined) {
      localStorage.removeItem("user");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (accessToken === undefined) {
      localStorage.removeItem("access_tokken");
      setUser(undefined);
      return;
    }

    getUser(accessToken).then((res) => {
      if (res !== null) {
        setUser(res);
      }
    });
  }, [accessToken]);

  return (
    <UserContext.Provider
      value={{
        user,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
