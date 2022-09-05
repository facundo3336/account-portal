import { Token, User } from "../types";

export const getToken = async (data: User) => {
  const tokenResponse = await fetch(`http://localhost:3000/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      username: data.email,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const tokenData: Token = await tokenResponse.json();

  if (tokenResponse.status === 201) {
    return tokenData;
  } else {
    return undefined;
  }
};
