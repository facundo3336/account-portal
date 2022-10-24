import { NextPage } from "next";
import { Button, ButtonColor } from "../../../components/Button/Button";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Discount.module.scss";

const Discount: NextPage = () => {
  return (
    <Layout>
      <div className={styles.discount}>
        <div className={styles.discountTitle}>
          <h3>Descuentos</h3>
          <div className={styles.discountButtons}>
            <Button
              textSize="sm"
              color={ButtonColor.Default}
              onClick={() => {}}
            >
              Exportar
            </Button>
            <Button
              textSize="sm"
              color={ButtonColor.Primary}
              onClick={() => {}}
            >
              Crear descuento
            </Button>
          </div>
        </div>
        <InfoCard
          imageUrl="/discount-scissors.svg"
          onClick={() => {}}
          buttonText="Crear descuento"
          title="Gestionar descuentos y promociones"
          description="Crear códigos de descuento y descuentos automáticos que se apliquen en la pantalla de pago. También puedes usar descuentos con precios de comparación."
        />
        <div className={styles.discountReadMore}>
          <p>Leer más acerca de</p>
          <a href="#">descuentos</a>
        </div>
      </div>
    </Layout>
  );
};

export default Discount;
