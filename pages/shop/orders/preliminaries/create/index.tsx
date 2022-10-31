import { NextPage } from "next";
import Router from "next/router";
import { Button, ButtonColor } from "../../../../../components/Button/Button";
import { Card } from "../../../../../components/Card/Card";
import { Input } from "../../../../../components/Input/Input";
import { Layout } from "../../../../../components/Layout/Layout";
import { StorePagesContainer } from "../../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./CreateOrder.module.scss";

const CreateOrder: NextPage = () => {
  const paymentTextClasses = [styles.paymentText, styles.border].join(" ");

  const onClickRedirect = (route: string) => {
    Router.push(route);
  };

  return (
    <Layout>
      <StorePagesContainer>
        <div>
          <div className={styles.title}>
            <div>
              <Button
                textSize="sm"
                onClick={() => {
                  onClickRedirect("/shop/orders");
                }}
                color={ButtonColor.Grey}
              >
                <span className="material-icons-outlined">arrow_back</span>
              </Button>
            </div>
            <h3>Crear pedido</h3>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.bigCardsContainer}>
              <Card size="info">
                <div className={styles.productsTitle}>
                  <h4>Productos</h4>
                  <div className={styles.productsLinkButton}>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Link}
                    >
                      Agregar articulo personalizado
                    </Button>
                  </div>
                </div>
                <div className={styles.productsInput}>
                  <div className={styles.productsInputContainer}>
                    <Input
                      type="text"
                      value=""
                      placerholder="Buscar productos"
                      onChange={() => {}}
                      imageUrl="/magnifying-glass.png"
                    />
                  </div>
                  <div className={styles.productsButtonContainer}>
                    <Button
                      textSize="sm"
                      color={ButtonColor.Grey}
                      onClick={() => {}}
                    >
                      Explorar
                    </Button>
                  </div>
                </div>
              </Card>
              <Card size="info" padding={false}>
                <div className={styles.paymentContainer}>
                  <h4>Pago</h4>
                  <table>
                    <tr>
                      <th>Subtotal</th>
                      <th></th>
                      <th>$0,00</th>
                    </tr>
                    <tr>
                      <td>Agregar descuento</td>
                      <td>-</td>
                      <td>$0,00</td>
                    </tr>
                    <tr>
                      <td>Agregar envio</td>
                      <td>-</td>
                      <td>$0,00</td>
                    </tr>
                    <tr>
                      <td>Inpuesto estimado</td>
                      <td>No calculado</td>
                      <td>$0,00</td>
                    </tr>
                    <tr className={styles.tableTotal}>
                      <td>Total</td>
                      <td></td>
                      <td>$0,00</td>
                    </tr>
                  </table>
                </div>
                <div className={paymentTextClasses}>
                  <p>
                    Agrega un producto para calcular el total y ver las opciones
                    de pago.
                  </p>
                </div>
                <div className={styles.paymentText}>
                  <p>
                    El valor de impuestos puede ser un estimado hasta que se
                    cree el pedido. Más información acerca de los{" "}
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Link}
                    >
                      impuestos estimados
                    </Button>
                  </p>{" "}
                </div>
              </Card>
            </div>
            <div className={styles.littleCardsContainer}>
              <Card size="info">
                <h4>Cliente</h4>
                <Input
                  onChange={() => {}}
                  value=""
                  type="text"
                  placerholder="Buscar o crear un cliente"
                  imageUrl="/magnifying-glass.png"
                />
              </Card>

              <Card size="info">
                <div className={styles.labelsTitle}>
                  <h4>Mercado</h4>
                  <Button
                    textSize="sm"
                    onClick={() => {}}
                    color={ButtonColor.Link}
                  >
                    Cambiar
                  </Button>
                </div>
                <div className={styles.principalMarketText}>
                  <span>Mercado principal</span>
                  <span>Uruguay (UYU $)</span>
                </div>
              </Card>
              <Card size="info">
                <div className={styles.labelsTitle}>
                  <h4>Notas</h4>
                </div>

                <Input onChange={() => {}} value="" type="text" />
              </Card>
              <Card size="info">
                <div className={styles.labelsTitle}>
                  <h4>Etiquetas</h4>
                  <Button
                    textSize="sm"
                    onClick={() => {}}
                    color={ButtonColor.Link}
                  >
                    Gestionar
                  </Button>
                </div>

                <Input
                  onChange={() => {}}
                  value=""
                  type="text"
                  placerholder="Buscar o crear etiquetas"
                  imageUrl="/magnifying-glass.png"
                />
              </Card>
            </div>
          </div>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default CreateOrder;
