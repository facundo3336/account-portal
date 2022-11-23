import { NextPage } from "next";
import { useState } from "react";
import { Button, ButtonColor } from "../../../../../components/Button/Button";
import { Card } from "../../../../../components/Card/Card";
import { Input } from "../../../../../components/Input/Input";
import { Layout } from "../../../../../components/Layout/Layout";
import { StorePagesContainer } from "../../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./CreateTransfer.module.scss";

const CreateTransfer: NextPage = () => {
  const [sourceInput, setSourceInput] = useState(false);
  const [destinyInput, setDestinyInput] = useState(false);

  const onClickSourceInput = () => {
    setSourceInput(!sourceInput);
  };

  const onClickDestinyInput = () => {
    setDestinyInput(!destinyInput);
  };

  return (
    <Layout>
      <StorePagesContainer>
        <div className={styles.titleContainer}>
          <div className={styles.arrowButton}>
            <Button color={ButtonColor.Grey} onClick={() => {}}>
              <span className="material-icons-outlined">arrow_back</span>
            </Button>
          </div>
          <h3>Crear transferencia de inventario</h3>
        </div>
        <Card size="info">
          <div className={styles.sourceDestinyContainer}>
            <div className={styles.sourceDestiny}>
              <h5>Origen</h5>

              <div
                className={styles.label + " selectTextDisable"}
                onClick={onClickSourceInput}
              >
                <span className={styles.labelText}> Seleccionar origen </span>
                <span className="material-icons-outlined">arrow_drop_down</span>
              </div>

              {sourceInput && (
                <div className={styles.inputContainer}>
                  <Input
                    type="text"
                    value=""
                    onChange={() => {}}
                    placerholder="Buscar"
                  />
                </div>
              )}
            </div>
            <div className={styles.greyLine}></div>
            <div className={styles.sourceDestiny}>
              <h5>Destino</h5>

              <div
                className={styles.label + " selectTextDisable"}
                onClick={onClickDestinyInput}
              >
                <span className={styles.labelText}> Seleccionar destino </span>
                <span className="material-icons-outlined">arrow_drop_down</span>
              </div>

              {destinyInput && (
                <div className={styles.inputContainer}>
                  <Input
                    type="text"
                    value=""
                    onChange={() => {}}
                    placerholder="Buscar"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
        <Card size="info">
          <div>
            <h3 className={styles.addProductsTitle}>Agregar productos</h3>
            <div className={styles.addProductsInput}>
              <Input
                type="text"
                value=""
                onChange={() => {}}
                placerholder="Buscar"
              />
              <Button
                textSize="sm"
                onClick={() => {}}
                color={ButtonColor.Primary}
              >
                Explorar
              </Button>
            </div>
          </div>
        </Card>
        <div>
          <Card size="info">
            <div>
              <h3 className={styles.shipmentDetailsTitle}>
                Detalles del envio
              </h3>
              <div className={styles.detailsInputs}>
                <div className={styles.calendarContainer}>
                  <label>Fecha de llegada estimada</label>
                  <input className={styles.calendar} type="date"></input>
                </div>
                <Input
                  type="text"
                  onChange={() => {}}
                  value=""
                  label="Numero de seguimiento"
                />
                <Input
                  type="text"
                  onChange={() => {}}
                  value=""
                  label="Empresa de transporte"
                />
              </div>
            </div>
          </Card>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default CreateTransfer;
