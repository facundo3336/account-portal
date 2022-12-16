import { NextPage } from "next";
import { useState } from "react";
import { Button, ButtonColor } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { Checkbox } from "../../../../components/Checkbox/CheckBox";
import { Input } from "../../../../components/Input/Input";
import { Layout } from "../../../../components/Layout/Layout";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./CreateCustomer.module.scss";

const CreateCustomer: NextPage = () => {
  const [emailCheckbox, setEmailCheckbox] = useState(false);
  const [textMessages, setSetMessages] = useState(false);
  const [taxes, setTaxes] = useState(false);

  const onChangeEmail = () => {
    setEmailCheckbox(!emailCheckbox);
  };

  const onChangeMessages = () => {
    setSetMessages(!textMessages);
  };

  const onChangeTaxes = () => {
    setTaxes(!taxes);
  };

  return (
    <Layout>
      <StorePagesContainer>
        <div className={styles.pageContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.arrowButtonContainer}>
              <Button onClick={() => {}} textSize="sm" color={ButtonColor.Grey}>
                <span className="material-icons-outlined">arrow_back</span>
              </Button>
            </div>
            <h4>Nuevo cliente</h4>
          </div>
          <div className={styles.greyLine}></div>
          <div className={styles.generalInfoContainer}>
            <h3>Información general del cliente</h3>
            <Card size="info">
              <div
                className={
                  styles.nameSurnameContainer + " " + styles.inputContainer
                }
              >
                <Input
                  type="text"
                  label="Nombre"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  type="text"
                  label="Apellido"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  type="email"
                  label="Correo electronico"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  type="text"
                  label="Numero de telefono"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Checkbox
                  value={emailCheckbox}
                  onChange={onChangeEmail}
                  label="El cliente aceptó recibir correos electrónicos"
                />
              </div>
              <div className={styles.inputContainer}>
                <Checkbox
                  value={textMessages}
                  onChange={onChangeMessages}
                  label="El cliente aceptó recibir mensajes de texto"
                />
              </div>
            </Card>
          </div>
          <div className={styles.greyLine}></div>
          <div className={styles.directionContainer}>
            <h3>Direccion</h3>
            <Card size="info">
              <div className={styles.inputContainer}>
                <Input
                  placerholder="Uruguay"
                  type="text"
                  label="Pais / Region"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  placerholder="Empresa"
                  type="text"
                  label="Empresa"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  placerholder="Direccion"
                  type="text"
                  label="Direccion"
                  value=""
                  onChange={() => {}}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  placerholder="Apartamento"
                  type="text"
                  label="Apartamento, local, etc"
                  value=""
                  onChange={() => {}}
                />
              </div>
            </Card>
          </div>
          <div className={styles.greyLine}></div>
          <div className={styles.texesContainer}>
            <h3>Exenciones de impuestos</h3>
            <Card size="info">
              <Checkbox
                value={taxes}
                onChange={onChangeTaxes}
                label="Recaudar impuestos"
              />
            </Card>
          </div>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default CreateCustomer;
