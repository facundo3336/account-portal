import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { NextPage } from "next";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.scss";
import { Checkbox } from "../../components/Checkbox/CheckBox";
import { Button, ButtonColor } from "../../components/Button/Button";
import Link from "next/link";

const Login: NextPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const onChangeName = (value: string) => {
    setData({
      ...data,
      name: value,
    });
  };

  const onChangeEmail = (value: string) => {
    setData({
      ...data,
      email: value,
    });
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
                value={data.name}
                onChange={onChangeName}
                link={{ label: "Olvidaste tu contraseña?", url: "" }}
              />
              <div className={styles.checkBoxLoginContainer}>
                <Checkbox label="Recordarme" />
              </div>
              <Button color={ButtonColor.Primary} onClick={() => {}}>
                Continuar
              </Button>
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

export default Login;
