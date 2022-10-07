import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Orders.module.scss";

const Orders: NextPage = () => {
  return (
    <Layout>
      <div className={styles.ordersPage}>
        <InfoCard
          imageUrl="/orders-img/document.svg"
          title="Tus pedidos aparecerán aquí"
          description="Para recibir pedidos y aceptar pagos de los clientes, debes seleccionar un plan. Solo se te cobrará por el plan después de que finalice tu prueba gratuita."
          buttonText="Seleccionar plan"
          onClick={() => {}}
        />
      </div>
    </Layout>
  );
};

export default Orders;