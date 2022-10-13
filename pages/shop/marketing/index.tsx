import { NextPage } from "next";
import { Button, ButtonColor } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./Marketing.module.scss";

const Marketing: NextPage = () => {
  return (
    <Layout>
      <div className={styles.marketingPage}>
        <div className={styles.marketingTitleContainer}>
          <h3>Marketing</h3>
          <div className={styles.createCampainButton}>
            <Button
              textSize="sm"
              onClick={() => {}}
              color={ButtonColor.Primary}
            >
              Crear campaña
            </Button>
          </div>
        </div>
        <div className={styles.calendarSection}>
          <input className={styles.marketingCalendar} type="date" />
          <p>en comparación con 4 ago / 2 sept 2022</p>
        </div>
        <section className={styles.reportsContainer}>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Sesiones en tu tienda online</h3>
                    <p className={styles.reportDescription}>
                      Numero de sesiones en tu tienda online. Una sesion es un
                      periodo de actividad continua de un visitante
                    </p>
                  </div>
                  <span>0 -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Tasa de conversión de la tienda</h3>
                    <p className={styles.reportDescription}>
                      Porcentaje de las sesiones totales que quedaron en pedidos
                    </p>
                  </div>
                  <span>0 % -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Valor promedio de los pedidos</h3>
                    <p className={styles.reportDescription}>
                      Valor total de todos los pedidos (incluidos los impuestos,
                      los envios y los descuentos, sin restar el valor de las
                      devoluciones) dividido por el numero total de pedidos
                    </p>
                  </div>
                  <span>0,00 UYU -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Ventas totales</h3>
                    <p className={styles.reportDescription}>
                      Ventas netas (ventas brutas menos descuentos y
                      devoluciones) mas impuestos y envios. Incluye pedidos de
                      todos los canales de venta.
                    </p>
                  </div>
                  <span>0,00 UYU -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Ventas atribuidas al marketing</h3>
                    <p className={styles.reportDescription}>
                      Ventas totales que se pueden atribuir al trafico dirigido
                      a tu tienda online por iniciativa de marketing.
                    </p>
                  </div>
                  <span>0,00 UYU -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.reportContainer}>
            <Card size="tiny">
              <div>
                <div className={styles.reportInfo}>
                  <div className={styles.reportTitleContainer}>
                    <h3>Pedidos atribuidos al marketing</h3>
                    <p className={styles.reportDescription}>
                      Ventas totales que se pueden atribuir al trafico dirigido
                      a tu tienda online por iniciativa de marketing.
                    </p>
                  </div>
                  <span>0 -</span>
                </div>
                <div className={styles.reportLine}>
                  <a href="#">Ver informe</a>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <Card size="info">
          <div className={styles.socialMediaSection}>
            <h3>Aplicaciones de marketing</h3>
            <p>
              Aumenta las sesiones, atrae compradores y promociona productos
              agregando más aplicaciones de marketing.
            </p>
          </div>
          <div className={styles.socialMediasContainer}>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/shop.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Shop</h5>
                <p>
                  Create a free mobile app experience for your online store.
                </p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/google.avif" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Google</h5>
                <p>
                  Llega a más compradores y mejora tu visibilidad en todo Google
                </p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/pinterest.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Pinterest</h5>
                <p>Comparte tus productos con los compradores de Pinterest</p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/microsoft.avif" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Microsoft</h5>
                <p>
                  Grow sales with Product Ads on the Microsoft Search Network.
                </p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/snap.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Snapchat Ads</h5>
                <p>Grow your business with shoppable ads on Snapchat!</p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/seguno.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Seguno: Email Marketing</h5>
                <p>
                  Email marketing newsletter, abandoned cart, & email templates.
                </p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage:
                    "url(" + "/social-medias-img/omnisend.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>Omnisend Email Marketing & SMS</h5>
                <p>Email Marketing, Newsletter, SMS, Abandoned Cart & Pop Up</p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div
                style={{
                  backgroundImage: "url(" + "/social-medias-img/sms.webp" + ")",
                }}
                className={styles.socialMediaImg}
              ></div>
              <div className={styles.socialMediaInfo}>
                <h5>SMSBump: SMS Marketing & Email</h5>
                <p>
                  Email & Text Marketing, SMS Automation and Abandoned Carts
                </p>
                <a href="#">Configurar la aplicacion</a>
              </div>
            </div>
          </div>
          <div className={styles.marketingButton}>
            <Button textSize="sm" onClick={() => {}} color={ButtonColor.Grey}>
              Ver aplicacion de marketing
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Marketing;
