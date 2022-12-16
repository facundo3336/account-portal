import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Customers.module.scss";
import { ButtonColor } from "../../../components/Button/Button";
import { ReadMore } from "../../../components/Read-more/ReadMore";
import { StorePagesContainer } from "../../../components/StorePagesContainer/StorePagesContainer";
import Router from "next/router";

const Customers: NextPage = () => {
  const onClickRedirect = () => {
    Router.push("/shop/customers/create");
  };

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
              onClick: onClickRedirect,
              color: ButtonColor.Primary,
            },
          ]}
        />
        <ReadMore
          link="#"
          linkText="clientes"
          description="Leer más acerca de"
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default Customers;
