import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Orders.module.scss";
import { ButtonColor } from "../../../components/Button/Button";
import { StorePagesContainer } from "../../../components/StorePagesContainer/StorePagesContainer";

const Orders: NextPage = () => {
  return (
    <Layout>
      <StorePagesContainer>
        <h3 className={styles.ordersTitle}>Pedidos</h3>
        <InfoCard
          buttons={[
            {
              text: "Seleccionar plan",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
          imageUrl="/orders-img/document.svg"
          title="Tus pedidos aparecerán aquí"
          description="Para recibir pedidos y aceptar pagos de los clientes, debes seleccionar un plan. Solo se te cobrará por el plan después de que finalice tu prueba gratuita."
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default Orders;
