import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Customers.module.scss";
import { ButtonColor } from "../../../components/Button/Button";
import { ReadMore } from "../../../components/Read-more/ReadMore";

const Customers: NextPage = () => {
  return (
    <Layout>
      <div className={styles.customers}>
        <h3>Clientes</h3>
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
        <ReadMore
          link="#"
          linkText="clientes"
          description="Leer más acerca de"
        />
      </div>
    </Layout>
  );
};

export default Customers;
