import { NextPage } from "next";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import { ButtonColor } from "../../../../components/Button/Button";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./Transfers.module.scss";
import { ReadMore } from "../../../../components/Read-more/ReadMore";

const Transfers: NextPage = () => {
  return (
    <Layout>
      <StorePagesContainer>
        <h3 className={styles.transfersTitle}>Transferencias</h3>
        <InfoCard
          buttons={[
            {
              text: "Crear transferencia",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
          imageUrl="/transfer.svg"
          title="Gestiona tu inventario entrante"
          description="Puedes hacer seguimiento y recibir inventario entrante de tus proveedores y sucursales."
        />
        <ReadMore
          link="#"
          linkText="transferencias de inventario"
          description="Más información acerca de"
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default Transfers;
