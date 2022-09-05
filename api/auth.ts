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

export const createUser = async (data: User) => {
  const createUserResponse = await fetch(`http://localhost:3000/users`, {
    method: "POST",
    body: JSON.stringify({
      name: data.username,
      email: data.email,
      password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (createUserResponse.status === 201) {
    return {
      success: true,
      error: undefined,
    };
  } else {
    return {
      success: false,
      error: "Ocurrió un error al crear el usuario",
    };
  }
};
