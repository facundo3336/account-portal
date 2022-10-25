import { NextPage } from "next";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import { ButtonColor } from "../../../../components/Button/Button";
import styles from "./Preliminaries.module.scss";

const Preliminaries: NextPage = () => {
  return (
    <Layout>
      <div className={styles.preliminaries}>
        <h3>Preliminares</h3>
        <InfoCard
          buttons={[
            {
              text: "Crear pedido preliminar",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
          imageUrl="/orders-img/preliminaries.svg"
          title="Crear manualmente pedidos y facturas"
          description="Usa pedidos preliminares para recibir pedidos por teléfono, enviar facturas a clientes por correo electrónico y cobrar pagos."
        />
        <div className={styles.readMore}>
          <p>Más información acerca de</p>
          <a href="#">crear pedidos preliminares</a>
        </div>
      </div>
    </Layout>
  );
};

export default Preliminaries;
