import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { NextPage } from "next";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.scss";
import { Checkbox } from "../../components/Checkbox/CheckBox";
import { Button, ButtonColor } from "../../components/Button/Button";
import Link from "next/link";
import { User } from "../../types";

const Login: NextPage = () => {
  const [data, setData] = useState<User>({
    email: "",
    password: "",
  });

  const [isUserRight, setIsUserRight] = useState<boolean>(true);

  const onChangePassword = (value: string) => {
    setData({
      ...data,
      password: value,
    });
  };

  const onChangeEmail = (value: string) => {
    setData({
      ...data,
      email: value,
    });
  };

  const onClickLogUser = () => {
    getToken(data, setIsUserRight);
  };

  return (
    <div className={styles.loginPage + " sideSpacing"}>
      <div className={styles.loginPageContent}>
        <Card size="md">
          <div>
            <h1>Ingresa a tu cuenta</h1>
            <div className={styles.inputsContainer}>
              <Input
                type="email"
                label="Email"
                value={data.email}
                onChange={onChangeEmail}
              />
              <Input
                type="text"
                label="Contraseña"
                value={data.password}
                onChange={onChangePassword}
                link={{ label: "Olvidaste tu contraseña?", url: "" }}
              />
              <div className={styles.checkBoxLoginContainer}>
                <Checkbox label="Recordarme" />
              </div>
              <Button color={ButtonColor.Primary} onClick={onClickLogUser}>
                Continuar
              </Button>
              {!isUserRight && (
                <span className={styles.errorUserSpan}>Usuario Erroneo</span>
              )}
            </div>
          </div>
        </Card>
        <div className={styles.accountAskContainer}>
          <span className={styles.accountAsk}>
            No tienes una cuenta? <Link href="/">Crea una</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export const getToken = async (
  data: User,
  setIsUserRight: (isUserRight: boolean) => void
) => {
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

  const tokenData = await tokenResponse.json();

  if (tokenResponse.status === 201) {
    localStorage.setItem("access_token", tokenData.access_token);
    setIsUserRight(true);
  }

  setIsUserRight(false);
};

export default Login;
