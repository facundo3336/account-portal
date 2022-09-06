import { User } from "../types";

export const getUser = async (token: string) => {
  const userResponse = await fetch(`http://localhost:3000/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = (await userResponse.json()) as User;

  if (userResponse.status === 200) {
    return data;
  } else {
    return null;
  }
};
