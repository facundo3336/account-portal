import { NextPage } from "next";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import { ButtonColor } from "../../../../components/Button/Button";
import styles from "./Inventory.module.scss";
import { ReadMore } from "../../../../components/Read-more/ReadMore";

const Inventory: NextPage = () => {
  return (
    <Layout>
      <div className={styles.inventory}>
        <h3>Inventario</h3>
        <InfoCard
          buttons={[
            {
              text: "Ir a productos",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
          imageUrl="/inventory.svg"
          title="Hacer seguimiento de tu inventario"
          description="Cuando activas el seguimiento de inventario en tus productos, puedes ver y ajustar sus recuentos de inventario aquí."
        />
        <ReadMore
          link="#"
          description="Más información acerca de"
          linkText="cómo gestionar el inventario"
        />
      </div>
    </Layout>
  );
};

export default Inventory;
