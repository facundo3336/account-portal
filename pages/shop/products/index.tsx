import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Button, ButtonColor } from "../../../components/Button/Button";
import styles from "./Products.module.scss";
import { Layout } from "../../../components/Layout/Layout";
import { ReadMore } from "../../../components/Read-more/ReadMore";
import { StorePagesContainer } from "../../../components/StorePagesContainer/StorePagesContainer";
import Router from "next/router";

const Products: NextPage = () => {
  const onClickRedirect = (path: string) => {
    Router.push(path);
  };

  return (
    <Layout>
      <StorePagesContainer>
        <div className={styles.productsTitle}>
          <h3>Productos</h3>
          <Button textSize="sm" color={ButtonColor.Grey} onClick={() => {}}>
            Importar
          </Button>
        </div>
        <InfoCard
          title="En primer lugar: ¿qué vendes?"
          description="Antes de abrir tu tienda, necesitas tener algunos productos."
          imageUrl="/product-page.svg"
          buttons={[
            {
              text: "Buscar productos para vender",
              onClick: () => {},
              color: ButtonColor.Grey,
            },
            {
              text: "Agregar productos",
              onClick: () => {
                onClickRedirect("/shop/products/add");
              },
              color: ButtonColor.Primary,
            },
          ]}
        />
        <ReadMore
          link="#"
          linkText="productos"
          description="Leer mas acerca de"
        />
      </StorePagesContainer>
    </Layout>
  );
};

export default Products;
