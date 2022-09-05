import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { NextPage } from "next";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.scss";
import { Checkbox } from "../../components/Checkbox/CheckBox";
import { Button, ButtonColor } from "../../components/Button/Button";
import Link from "next/link";
import { User } from "../../types";
import { login } from "../../utils/auth";

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | undefined>();

  const onChangeData = (value: string, name: string) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClickLogUser = async () => {
    setLoading(true);
    const loginResponse = await login(data);

    if (loginResponse.success === false) {
      setError(loginResponse.error);
      setLoading(false);
    }
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
                onChange={(value) => onChangeData(value, "email")}
              />
              <Input
                type="password"
                label="Contraseña"
                value={data.password}
                onChange={(value) => onChangeData(value, "password")}
                link={{ label: "Olvidaste tu contraseña?", url: "" }}
              />
              <div className={styles.checkBoxLoginContainer}>
                <Checkbox label="Recordarme" />
              </div>
              <Button
                disabled={loading}
                color={ButtonColor.Primary}
                onClick={onClickLogUser}
              >
                Continuar
              </Button>
              {error !== undefined && (
                <span className={styles.errorUserSpan}>{error}</span>
              )}
            </div>
          </div>
        </Card>
        <div className={styles.accountAskContainer}>
          <span className={styles.accountAsk}>
            No tienes una cuenta? <Link href="/register">Crea una</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
