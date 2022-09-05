import { useContext } from "react";
import { getToken } from "../api/auth";
import { UserContext } from "../context/user-context";
import { User } from "../types";

export const login = async (data: User) => {
  const token = await getToken(data);
  console.log(token);

  if (token !== undefined) {
    localStorage.setItem("access_token", token.access_token);

    return {
      success: true,
      error: undefined,
    };
  }

  return {
    success: false,
    error: "Ocurrió un error al realizar la autenticación",
  };
};
