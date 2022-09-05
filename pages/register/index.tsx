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
import { createUser } from "../../api/auth";

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User>({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | undefined>();

  const onChangeData = (value: string, name: string) => {
    setData({
      ...data,
      [name]: value,
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
    } else {
      setError(loginResponse.error);
      setLoading(false);
      return;
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
                onChange={(value) => onChangeData(value, "email")}
              />
              <Input
                type="text"
                label="Full Name"
                value={data.username as string}
                onChange={(value) => onChangeData(value, "username")}
              />
              <Input
                type="password"
                label="Contraseña"
                value={data.password}
                onChange={(value) => onChangeData(value, "password")}
              />

              <Button
                disabled={loading}
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

export default Login;
