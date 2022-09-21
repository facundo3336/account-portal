import { NextPage } from "next";
import Router from "next/router";
import { useContext, useState } from "react";
import { Button, ButtonColor } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DropdownItem } from "../../components/DropdownItem/DropdownItem";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { UserContext } from "../../context/user-context";
import styles from "./create-store.module.scss";

const CreateStore: NextPage = () => {
  const [storeName, setStoreName] = useState("");
  const { user } = useContext(UserContext);

  const onClickRedirectBack = () => {};

  const onClickRedirectStore = () => {
    Router.push("/account-setup");
  };

  const onChangeStoreName = (value: string) => {
    setStoreName(value);
  };

  return (
    <div className={styles.createStorePage + " sideSpacing"}>
      <Card size="lg">
        <div>
          <Header>
            <Dropdown title={user?.username as string}>
              <DropdownItem url="" icon="account_circle">
                <span>Editar cuenta</span>
              </DropdownItem>
              <DropdownItem url="" icon="switch_account">
                <span>Cambiar cuenta</span>
              </DropdownItem>
              <DropdownItem url="" icon="logout">
                <span>Salir</span>
              </DropdownItem>
            </Dropdown>
          </Header>
          <div className={styles.createStoreTitleContainer}>
            <Button color={ButtonColor.Default} onClick={onClickRedirectBack}>
              <span className="material-icons-outlined">west</span>
            </Button>
            <h1>Crea tu tienda</h1>
          </div>
          <p>
            Esta tienda estara conectada a {user?.email}, y es gratis por 14
            dias.
          </p>
          <Input
            label="Nombre de la tienda"
            onChange={(value) => {
              onChangeStoreName(value);
            }}
            type="text"
            value={storeName}
          />
          <div className={styles.createStoreButton}>
            <Button onClick={onClickRedirectStore} color={ButtonColor.Primary}>
              Crear tienda
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreateStore;
