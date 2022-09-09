import { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import { Button, ButtonColor } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DropdownItem } from "../../components/DropdownItem/DropdownItem";
import { LoggedIn } from "../../components/LoggedIn/LoggedIn";
import { Select } from "../../components/Select/Select";
import styles from "./AccountSetup.module.scss";
import { operatingOptions, revenueOptions, sellingOptions } from "./variables";

const AccountSetup: NextPage = () => {
  const [values, setValues] = useState({
    sellingValue: "",
    revenueValue: "",
    operatingValue: "",
  });

  const areValuesCorrect = () => {
    if (
      values.sellingValue !== "" &&
      values.revenueValue !== "" &&
      values.operatingValue !== ""
    ) {
      return true;
    }
    return false;
  };

  const onClickRedirect = () => {
    Router.push("/account-setup/adress");
  };

  const onChangeSetValue = (value: string, name: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <LoggedIn>
      <div className={`${styles.accountSetupStep1Page} sideSpacing`}>
        <Dropdown title="Test">
          <DropdownItem icon="account_circle">Holas como tas</DropdownItem>
          <DropdownItem type="separator" />
          <DropdownItem>Holas como te va pariente</DropdownItem>
          <DropdownItem>Holas sr</DropdownItem>
        </Dropdown>
        <Card size="lg">
          <div className={styles.accountSetupHeadContainer}>
            <span className={styles.stepLetter}>Paso 1 de 2</span>
            <h1>Cuentanos acerca de ti</h1>
            <p>Te ayudaremos a empezar en base a tus respuestas</p>
          </div>
          <div>
            <div className={styles.accountSetupSelectContainer}>
              <label>Ya estas vendiendo?</label>
              <Select
                value={values.sellingValue}
                onChange={(value: string) => {
                  onChangeSetValue(value, "sellingValue");
                }}
                defaultText="Por favor seleccionar una"
                options={sellingOptions}
              />
            </div>
            <div className={styles.accountSetupSelectContainer}>
              <label>Cual es tu ingreso recurrente?</label>
              <Select
                value={values.revenueValue}
                onChange={(value: string) => {
                  onChangeSetValue(value, "revenueValue");
                }}
                defaultText="Por favor seleccionar una"
                options={revenueOptions}
              />
            </div>
            <div className={styles.accountSetupSelectContainer}>
              <label>En que industria trabajas?</label>
              <Select
                value={values.operatingValue}
                onChange={(value: string) => {
                  onChangeSetValue(value, "operatingValue");
                }}
                defaultText="Por favor seleccionar una"
                options={operatingOptions}
              />
            </div>
            <div className={styles.accountSetupButtonsContainer}>
              <Button
                disabled={!areValuesCorrect()}
                onClick={onClickRedirect}
                color={ButtonColor.Primary}
              >
                Siguiente
              </Button>

              <Button onClick={() => {}} color={ButtonColor.Default}>
                Saltar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </LoggedIn>
  );
};

export default AccountSetup;
