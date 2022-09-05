import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { NextPage } from "next";
import { Input } from "../../components/Input/Input";
import styles from "./Register.module.scss";
import { Button, ButtonColor } from "../../components/Button/Button";
import Link from "next/link";
import { User } from "../../types";
import { login } from "../../utils/auth";
import Router from "next/router";

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User>({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | undefined>();

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

  const onChangeUsername = (value: string) => {
    setData({
      ...data,
      username: value,
    });
  };

  const onClickCreateUser = async () => {
    setLoading(true);
    const createResponse = await createUser(data);

    if (createResponse.success === false) {
      setError(createResponse.error);
      setLoading(false);
      return;
    }

    const loginResponse = await login(data);

    if (loginResponse.success === true) {
      Router.push("/");
    }
  };

  return (
    <div className={styles.registerPage + " sideSpacing"}>
      <div className={styles.registerInfoBox}>
        <div className={styles.registerInfoBoxContainer}>
          <div className={styles.checkCircleDiv}></div>
          <div className={styles.registerInfoContent}>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Phasellus et mauris nec elit tristique ultricies. Vestibulum
              luctus elementum erat elit cursus placerat vitae non libero.
            </p>
          </div>
        </div>
        <div className={styles.registerInfoBoxContainer}>
          <div className={styles.checkCircleDiv}></div>
          <div className={styles.registerInfoContent}>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Phasellus et mauris nec elit tristique ultricies. Vestibulum
              luctus elementum erat elit cursus placerat vitae non libero.
            </p>
          </div>
        </div>
        <div className={styles.registerInfoBoxContainer}>
          <div className={styles.checkCircleDiv}></div>
          <div className={styles.registerInfoContent}>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Phasellus et mauris nec elit tristique ultricies. Vestibulum
              luctus elementum erat elit cursus placerat vitae non libero.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.registerPageContent}>
        <Card size="md">
          <div>
            <h1>Crea tu cuenta</h1>
            <div className={styles.inputsContainer}>
              <Input
                type="email"
                label="Email"
                value={data.email}
                onChange={onChangeEmail}
              />
              <Input
                type="text"
                label="Full Name"
                value={data.username as string}
                onChange={onChangeUsername}
              />
              <Input
                type="password"
                label="Contraseña"
                value={data.password}
                onChange={onChangePassword}
              />

              <Button
                disable={loading}
                color={ButtonColor.Primary}
                onClick={onClickCreateUser}
              >
                {loading ? "Creando" : "Crear cuenta"}
              </Button>

              {error !== undefined && (
                <span className={styles.errorUserSpan}>{error}</span>
              )}
            </div>
          </div>
        </Card>
        <div className={styles.accountAskContainer}>
          <span className={styles.accountAsk}>
            Tienes una cuenta? <Link href="/login">Logeate</Link>
          </span>
        </div>
      </div>
    </div>
  );
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

export default Login;
