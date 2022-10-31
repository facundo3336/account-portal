import { NextPage } from "next";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import { ButtonColor } from "../../../../components/Button/Button";
import styles from "./Preliminaries.module.scss";
import { ReadMore } from "../../../../components/Read-more/ReadMore";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";
import Router from "next/router";

const Preliminaries: NextPage = () => {
  const onClickRedirect = () => {
    Router.push("/shop/orders/preliminaries/create");
  };

  return (
    <Layout>
      <StorePagesContainer>
        <h3 className={styles.preliminariesTitle}>Preliminares</h3>
        <InfoCard
          buttons={[
            {
              text: "Crear pedido preliminar",
              onClick: onClickRedirect,
              color: ButtonColor.Primary,
            },
          ]}
          imageUrl="/orders-img/preliminaries.svg"
          title="Crear manualmente pedidos y facturas"
          description="Usa pedidos preliminares para recibir pedidos por teléfono, enviar facturas a clientes por correo electrónico y cobrar pagos."
        />

        <ReadMore
          link="#"
          description="Más información acerca de"
          linkText="crear pedidos preliminares"
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default Preliminaries;
