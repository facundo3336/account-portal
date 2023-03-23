import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Button, ButtonColor } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Checkbox } from "../../components/Checkbox/CheckBox";
import { Input } from "../../components/Input/Input";
import styles from "./AccountSetup.module.scss";

const Adress: NextPage = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    adress: "",
    home: "",
    postalCode: "",
    city: "",
    phone: "",
    webPageBussiness: "",
    registeredBussiness: false,
  });

  const onChangeSetData = (value: string | boolean, name: string) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClickRedirect = () => {
    Router.push("/account-setup");
  };

  return (
    <div className={styles.step2Container + " sideSpacing"}>
      <div className={styles.step2CardContainer}>
        <Card size="lg">
          <div>
            <div className={styles.accountSetupHeadContainer}>
              <span className={styles.stepLetter}>Paso 1 de 2</span>
              <h1>Agrega una direccion</h1>
              <p>Esto sera usado como tu negocio por defecto</p>
              <p>Podras cambiarlo mas tarde</p>
            </div>
            <div>
              <div className={styles.accountSetupInputContainer}>
                <Input
                  label="Nombre"
                  type="text"
                  value={data.name}
                  onChange={(value: string) => {
                    onChangeSetData(value, "name");
                  }}
                />
                <Input
                  label="Apellido"
                  type="text"
                  value={data.surname}
                  onChange={(value: string) => {
                    onChangeSetData(value, "surname");
                  }}
                />
              </div>
              <div className={styles.accountSetupInputContainer}>
                <Input
                  label="Direccion"
                  type="text"
                  value={data.adress}
                  onChange={(value: string) => {
                    onChangeSetData(value, "adress");
                  }}
                />
              </div>
              <div
                className={
                  styles.accountSetupInputContainer +
                  " " +
                  styles.accountSetupDobleInput
                }
              >
                <Input
                  label="Apartamento, casa, etc"
                  type="text"
                  value={data.home}
                  onChange={(value: string) => {
                    onChangeSetData(value, "home");
                  }}
                />
              </div>
              <div className={styles.accountSetupInputContainer}>
                <Input
                  label="Codigo postal"
                  type="text"
                  value={data.postalCode}
                  onChange={(value: string) => {
                    onChangeSetData(value, "postalCode");
                  }}
                />
                <Input
                  label="Ciudad"
                  type="text"
                  value={data.city}
                  onChange={(value: string) => {
                    onChangeSetData(value, "city");
                  }}
                />
              </div>
              <div className={styles.accountSetupInputContainer}>
                <Input
                  label="Telefono"
                  type="text"
                  value={data.phone}
                  onChange={(value: string) => {
                    onChangeSetData(value, "phone");
                  }}
                />
                <Input
                  label="Negocio o pagina web personal (opcional)"
                  type="text"
                  value={data.webPageBussiness}
                  onChange={(value: string) => {
                    onChangeSetData(value, "webPageBussiness");
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.step2Checkbox}>
            <Checkbox
              onChange={(value: boolean) => {
                onChangeSetData(value, "registeredBussiness");
              }}
              value={data.registeredBussiness}
              label="Esta tienda es un negocio registrado"
            />
          </div>
          <div className={styles.step2ButtonsContainer}>
            <div className={styles.step2Button}>
              <Button onClick={() => {}} color={ButtonColor.Primary}>
                Entrar a mi tienda
              </Button>
            </div>
            <div className={styles.step2Button}>
              <Button onClick={onClickRedirect} color={ButtonColor.Default}>
                <div className={styles.buttonArrow}>
                  <span className="material-icons-outlined">chevron_left</span>
                  Volver
                </div>
              </Button>
            </div>
          </div>
        </Card>
        <div className={styles.step2Terms}>
          <p>
            Clickeando en &quot;Entrar a mi tienda&quot; estas de acuerdo con
            Eshopuy <Link href="/">Terminos y condiciones</Link> y{" "}
            <Link href="/">Politica de privacidad</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adress;
