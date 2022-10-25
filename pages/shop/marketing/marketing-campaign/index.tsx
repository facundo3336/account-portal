import { NextPage } from "next";
import { Button, ButtonColor } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { Layout } from "../../../../components/Layout/Layout";
import { ReadMore } from "../../../../components/Read-more/ReadMore";
import { Title } from "../../../../components/Title/Title";
import styles from "./MarketingCampaign.module.scss";

const MarketingPage: NextPage = () => {
  return (
    <Layout>
      <div className={styles.marketingPage}>
        <div className={styles.titleContainer}>
          <h3>Campañas</h3>
          <div className={styles.createCampaignButton}>
            <Button
              onClick={() => {}}
              color={ButtonColor.Primary}
              textSize="sm"
            >
              Crear campaña
            </Button>
          </div>
        </div>
        <Card size="info">
          <section className={styles.bestMarketingSection}>
            <div className={styles.bestMarketingInfo}>
              <h5>Mejora tu marketing con Eshop Email</h5>
              <p>
                El 99 % de los consumidores verifica a diario su correo
                electrónico. Crea relaciones con los clientes y aumenta tus
                ventas gracias al correo electrónico, directamente desde el
                panel de control.
              </p>
              <div className={styles.emailButton}>
                <Button
                  onClick={() => {}}
                  textSize="sm"
                  color={ButtonColor.Grey}
                >
                  Crear correo electrónico
                </Button>
              </div>
            </div>
            <div
              className={styles.violetPlane}
              style={{
                backgroundImage: "url(" + "/violet-plane.png" + ")",
              }}
            ></div>
          </section>
        </Card>
        <div className={styles.resultsTitle}>
          <h6>Resultados de las campañas</h6>{" "}
          <span>17 sept–16 oct 2022 comparado con 18 ago–16 sept 2022</span>
        </div>
        <div className={styles.campaignsContainer}>
          <Card size="tiny">
            <div className={styles.campaignResult}>
              <div className={styles.campaignResultTitle}>
                <Title
                  underline={true}
                  title="Sesiones"
                  description="Numero de visitas en tu tienda online a partir de campañas de marketing. Una visita es un periodo de actividad continua de un visitante"
                />
              </div>
              <span>0 -</span>
            </div>
          </Card>
          <Card size="tiny">
            <div className={styles.campaignResult}>
              <div className={styles.campaignResultTitle}>
                <Title
                  underline={true}
                  title="Pedidos"
                  description="Total de pedidos en la tienda online por las campañas de marketing de Eshopuy"
                />
              </div>
              <span>0 -</span>
            </div>
          </Card>
          <Card size="tiny">
            <div className={styles.campaignResult}>
              <div className={styles.campaignResultTitle}>
                <Title
                  underline={true}
                  title="Ventas"
                  description="Ventas totales por las campañas de marketing de Eshopuy"
                />
              </div>
              <span>0,00 $ - </span>
            </div>
          </Card>
          <Card size="tiny">
            <div className={styles.campaignResult}>
              <div className={styles.campaignResultTitle}>
                <Title
                  underline={true}
                  title="Costo"
                  description="Costo total gastado en campañas de marketing de Eshopuy"
                />
              </div>
              <span>0,00 $ - </span>
            </div>
          </Card>
        </div>
        <div className={styles.marketingCampaignInfoContainer}>
          <Card size="info">
            <Title
              underline={false}
              title="Campañas de marketing"
              description="Las campañas de marketing son grupos de actividades de marketing relacionadas"
            />
            <div className={styles.marketingCampaignInfoSection}>
              <p>
                Las campañas de marketing son grupos de actividades de marketing
                relacionadas.
              </p>
              <a href="#">Crear campaña</a>
            </div>
          </Card>
        </div>
        <ReadMore
          link="#"
          linkText="campañas de marketing"
          description="Leer más acerca de"
        />
      </div>
    </Layout>
  );
};

export default MarketingPage;
