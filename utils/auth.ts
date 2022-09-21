import { getToken } from "../api/auth";
import { User } from "../types";

export const login = async (data: User) => {
  const token = await getToken(data);

  if (token !== undefined) {
    localStorage.setItem("access_token", token.access_token);

    return {
      token: token.access_token,
      success: true,
      error: undefined,
    };
  }

  return {
    success: false,
    error: "Ocurrió un error al realizar la autenticación",
  };
};
