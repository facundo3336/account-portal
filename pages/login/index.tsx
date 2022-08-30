import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { NextPage } from "next";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.scss";

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
    <div className={styles.loginPage}>
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
