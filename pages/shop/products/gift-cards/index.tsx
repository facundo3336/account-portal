import { NextPage } from "next";
import { ButtonColor } from "../../../../components/Button/Button";
import { InfoCard } from "../../../../components/Info-Card/Info-Card";
import { Layout } from "../../../../components/Layout/Layout";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./GiftCards.module.scss";

const GiftCards: NextPage = () => {
  return (
    <Layout>
      <StorePagesContainer>
        <h3 className={styles.giftCardsTitle}>Tarjetas de regalo</h3>
        <InfoCard
          imageUrl="/gift-card.svg"
          buttons={[
            {
              text: "Agregar tarjeta de regalo",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
            {
              text: "Emitir tarjeta de regalo",
              onClick: () => {},
              color: ButtonColor.Primary900,
            },
          ]}
          title="Tarjetas de regalo digitales"
          description="Las tarjetas de regalo pueden venderse como productos o enviarse directamente a los clientes."
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default GiftCards;
