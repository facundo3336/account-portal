import { NextPage } from "next";
import { Button, ButtonColor } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { Layout } from "../../../components/Layout/Layout";
import { Report } from "../../../components/Report/Report";
import { SocialMedia } from "../../../components/Social-media/SocialMedia";
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
          <Report
            reportData="0"
            link="#"
            title="Sesiones en tu tienda online"
            description=" Numero de sesiones en tu tienda online. Una sesion es un
                      periodo de actividad continua de un visitante"
          />
          <Report
            link="#"
            reportData="0 %"
            title="Tasa de conversión de la tienda"
            description="Porcentaje de las sesiones totales que quedaron en pedidos"
          />
          <Report
            title="Valor promedio de los pedidos"
            description="Valor total de todos los pedidos (incluidos los impuestos,
                      los envios y los descuentos, sin restar el valor de las
                      devoluciones) dividido por el numero total de pedidos"
            reportData="0,00 UYU"
            link="#"
          />
          <Report
            title="Ventas totales"
            description=" Ventas netas (ventas brutas menos descuentos y
                      devoluciones) mas impuestos y envios. Incluye pedidos de
                      todos los canales de venta."
            link="#"
            reportData="0,00 UYU"
          />
          <Report
            title="Ventas atribuidas al marketing"
            description="Ventas totales que se pueden atribuir al trafico dirigido
                      a tu tienda online por iniciativa de marketing."
            link="#"
            reportData="0,00 UYU"
          />
          <Report
            title="Pedidos atribuidos al marketing"
            description="Ventas totales que se pueden atribuir al trafico dirigido
                      a tu tienda online por iniciativa de marketing."
            link="#"
            reportData="0"
          />
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
            <SocialMedia
              title="Shop"
              imageUrl="/social-medias-img/shop.webp"
              description="Create a free mobile app experience for your online store."
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Google"
              imageUrl="/social-medias-img/google.avif"
              description="Llega a más compradores y mejora tu visibilidad en todo Google"
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Pinterest"
              imageUrl="/social-medias-img/pinterest.webp"
              description="Comparte tus productos con los compradores de Pinterest"
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Microsoft"
              imageUrl="/social-medias-img/microsoft.avif"
              description="Grow sales with Product Ads on the Microsoft Search Network."
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Snapchat Ads"
              imageUrl="/social-medias-img/snap.webp"
              description="Grow your business with shoppable ads on Snapchat!"
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Seguno: Email Marketing"
              imageUrl="/social-medias-img/seguno.webp"
              description="Email marketing newsletter, abandoned cart, & email templates."
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="Omnisend Email Marketing & SMS"
              imageUrl="/social-medias-img/omnisend.webp"
              description="Email Marketing, Newsletter, SMS, Abandoned Cart & Pop Up"
              linkLabel="Configurar la aplicacion"
              link="#"
            />
            <SocialMedia
              title="SMSBump: SMS Marketing & Email"
              imageUrl="/social-medias-img/sms.webp"
              description=" Email & Text Marketing, SMS Automation and Abandoned Carts"
              linkLabel="Configurar la aplicacion"
              link="#"
            />
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
