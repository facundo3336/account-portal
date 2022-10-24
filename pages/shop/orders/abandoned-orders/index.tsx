import { NextPage } from "next";
import { useState } from "react";
import { Button, ButtonColor } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import styles from "./AbandonedOrders.module.scss";

const AbandonedOrders: NextPage = () => {
  const [close, setClose] = useState(true);

  const onClickClose = () => {
    setClose(false);
  };

  return (
    <Layout>
      <div className={styles.abandonedOrders}>
        <h3>Pedidos abandonados</h3>
        {close && (
          <Card size="info">
            <div className={styles.updateSection}>
              <div className={styles.updateContent}>
                <h6>
                  Actualizar a la nueva automatización de pedido abandonado
                </h6>
                <p>
                  Personaliza los mensajes con la edición mejorada de correos
                  electrónicos y la personalización de flujos de trabajo. Mejor
                  aún, recupera más ventas con las automatizaciones de carrito
                  abandonado y navegación de productos abandonada recién
                  agregadas.
                </p>
                <Button
                  textSize="sm"
                  onClick={() => {}}
                  color={ButtonColor.Grey}
                >
                  Visitar automatizaciones de marketing
                </Button>
              </div>
              <div className={styles.abandonedImg}></div>
              <span onClick={onClickClose} className="material-icons-outlined">
                close
              </span>
            </div>
          </Card>
        )}
        <div className={styles.abandonedOrdersContent}>
          <InfoCard
            imageUrl="/automations-page/error-cart.svg"
            title="Los pedidos abandonados aparecerán aquí"
            description="Puedes ver cuando los clientes agregan un artículo a su carrito pero no completan el pago. También puedes enviarles por correo electrónico un enlace a su carrito."
          />
        </div>
        <div className={styles.readMore}>
          <p>Leer más acerca de</p>
          <a href="#">pedidos abandonados</a>
        </div>
      </div>
    </Layout>
  );
};

export default AbandonedOrders;
