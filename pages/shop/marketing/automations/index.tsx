import { NextPage } from "next";
import { Layout } from "../../../../components/Layout/Layout";
import styles from "./Automations.module.scss";
import { Card } from "../../../../components/Card/Card";
import { Title } from "../../../../components/Title/Title";
import { Button, ButtonColor } from "../../../../components/Button/Button";
import { useState } from "react";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";

const Automations: NextPage = () => {
  const [close, setClose] = useState(false);

  const onClickClose = () => {
    setClose(true);
  };

  return (
    <Layout>
      <StorePagesContainer>
        <div className={styles.titleContainer}>
          <h3>Automatizaciones</h3>
          <div className={styles.createAutomationButton}>
            <Button
              onClick={() => {}}
              color={ButtonColor.Primary}
              textSize="sm"
            >
              Crear automatizacion
            </Button>
          </div>
        </div>
        <div className={styles.resultsTitle}>
          <h6>Resultados de las automatizaciones de marketing</h6>{" "}
          <span>17 sept–16 oct 2022 comparado con 18 ago–16 sept 2022</span>
        </div>
        <div className={styles.automationsCampaignsContainer}>
          <Card size="tiny">
            <div className={styles.automationsResult}>
              <div className={styles.automationsResultTitle}>
                <Title
                  underline={true}
                  title="Alcance"
                  description="Numero total de impresiones para todas las actividades de marketing utilizadas en tus automatizaciones de marketing"
                />
              </div>
              <span>0 -</span>
            </div>
          </Card>
          <Card size="tiny">
            <div className={styles.automationsResult}>
              <div className={styles.automationsResultTitle}>
                <Title
                  underline={true}
                  title="Tasa de conversión"
                  description="El porcentaje de alcance atribuido a tu automatizacion de marketing que produjo la compra"
                />
              </div>
              <span>0,00 $ - </span>
            </div>
          </Card>
          <Card size="tiny">
            <div className={styles.automationsResult}>
              <div className={styles.automationsResultTitle}>
                <Title
                  underline={true}
                  title="Ventas"
                  description="Ventas totales a partir de automatizacion de marketing de Eshopuy"
                />
              </div>
              <span>0,00 $ - </span>
            </div>
          </Card>
        </div>
        <div className={close ? styles.recoverSellsClose : ""}>
          <Card size="info">
            <div className={styles.recoverSellsSection}>
              <div className={styles.recoverSellsTitle}>
                <div>
                  <h4>
                    Recuperar las ventas con automatizaciones de captación
                  </h4>
                  <span className={styles.newButton}>Nuevo</span>
                </div>
                <span
                  onClick={onClickClose}
                  className={styles.closeCross + " material-icons-outlined"}
                >
                  close
                </span>
              </div>
              <p className={styles.automationDescriptionText}>
                Convierte a los visitantes de la tienda en clientes al atraerlos
                de vuelta a tu tienda para completar una compra. Para empezar,
                simplemente activa la automatización. O selecciona la vista
                previa para ver o editar los detalles de automatización.
              </p>
              <div className={styles.automationsDetails}>
                <div className={styles.automationDetails}>
                  <div className={styles.automationDescriptionContainer}>
                    <div
                      style={{
                        backgroundImage:
                          "url(" + "/automations-page/cart-checked.svg" + ")",
                      }}
                      className={styles.automationImg}
                    ></div>
                    <div className={styles.automationDescription}>
                      <h6>Pedidos abandonados</h6>
                      <p>
                        Conduce a los clientes de vuelta a la tienda para que
                        completen el pago.
                      </p>
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Grey}
                    >
                      Vista previa
                    </Button>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Primary}
                    >
                      Activar
                    </Button>
                  </div>
                </div>
                <div className={styles.automationDetails}>
                  <div className={styles.automationDescriptionContainer}>
                    <div
                      style={{
                        backgroundImage:
                          "url(" + "/automations-page/lost-product.svg" + ")",
                      }}
                      className={styles.automationImg}
                    ></div>
                    <div className={styles.automationDescription}>
                      <h6>Pedidos abandonados</h6>
                      <p>
                        Conduce a los clientes de vuelta a la tienda para que
                        completen el pago.
                      </p>
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Grey}
                    >
                      Vista previa
                    </Button>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Primary}
                    >
                      Activar
                    </Button>
                  </div>
                </div>
                <div className={styles.automationDetails}>
                  <div className={styles.automationDescriptionContainer}>
                    <div
                      style={{
                        backgroundImage:
                          "url(" + "/automations-page/cart-return.svg" + ")",
                      }}
                      className={styles.automationImg}
                    ></div>
                    <div className={styles.automationDescription}>
                      <h6>Pedidos abandonados</h6>
                      <p>
                        Conduce a los clientes de vuelta a la tienda para que
                        completen el pago.
                      </p>
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Grey}
                    >
                      Vista previa
                    </Button>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Primary}
                    >
                      Activar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.marketingCampaignInfoContainer}>
          <Card size="info">
            <Title
              underline={false}
              title="Automatizaciones"
              description="Las automatizaciones de marketing se configuran una vez y se ejecutan durante el tiempo que desees"
            />
            <div className={styles.marketingCampaignInfoSection}>
              <p>
                Las automatizaciones de marketing se configuran una vez y se
                ejecutan durante el tiempo que desees.
              </p>
              <a href="#">Iniciar automatizacion</a>
            </div>
          </Card>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default Automations;
