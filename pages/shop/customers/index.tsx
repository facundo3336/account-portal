import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Customers.module.scss";
import { ButtonColor } from "../../../components/Button/Button";
import { StorePagesContainer } from "../../../components/StorePagesContainer/StorePagesContainer";

const Customers: NextPage = () => {
  return (
    <Layout>
      <StorePagesContainer>
        <h3 className={styles.customersTitle}>Clientes</h3>
        <InfoCard
          title="Todo lo relacionado con los clientes en un solo lugar"
          description="Cuando agregues clientes, podrás actualizar sus detalles, ver un resumen de su historial de pedidos, crear segmentos para enviar comunicaciones personalizadas que aumentan las ventas y mucho más."
          imageUrl="/customer.svg"
          buttons={[
            {
              text: "Importar clientes",
              onClick: () => {},
              color: ButtonColor.Grey,
            },
            {
              text: "Agregar cliente",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
        />
        <div className={styles.readMore}>
          <p>Leer más acerca de</p>
          <a href="#">clientes</a>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default Customers;
