import { NextPage } from "next";
import styles from "./Stores.module.scss";
import { Header } from "../../components/Header/Header";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DropdownItem } from "../../components/DropdownItem/DropdownItem";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { Card } from "../../components/Card/Card";

const Stores: NextPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.storesPage + " sideSpacing"}>
      <Card size="lg">
        <Header>
          <Dropdown title={user?.username as string}>
            <DropdownItem onClick={() => {}} icon="account_circle">
              <span>Editar cuenta</span>
            </DropdownItem>
            <DropdownItem onClick={() => {}} icon="switch_account">
              <span>Cambiar cuenta</span>
            </DropdownItem>
            <DropdownItem onClick={() => {}} icon="logout">
              <span>Salir</span>
            </DropdownItem>
          </Dropdown>
        </Header>
        <h1>Tiendas</h1>
        <div className={styles.storeCardsContainer}></div>
      </Card>
    </div>
  );
};

export default Stores;
