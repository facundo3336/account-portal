import type { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Button, ButtonColor } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onClickRedirect = () => {
    Router.push("/shop-questionnaire");
  };

  return (
    <div className={styles.container}>
      <div className={styles.indexPageHeaderContainer}>
        <div className={styles.mainPageHeaderWidth + " sideSpacing"}>
          <Header transparent={true}>
            <div className={styles.headerLogo}></div>
          </Header>
          <div>
            <h2>Vende online con Eshopuy</h2>
            <h4>Una plataforma facil de usar con muchos usuarios</h4>
            <div className={styles.indexPageInputContainer}>
              <div className={styles.indexHeaderInputContainer}>
                <Input
                  placerholder="Dirección correo electrónico"
                  type="text"
                  value={email}
                  onChange={(value) => onChangeEmail(value)}
                />
              </div>
              <Button
                onClick={onClickRedirect}
                color={ButtonColor.Secondary700}
              >
                Prueba gratis
              </Button>
            </div>
            <p>
              Prueba Eshopuy gratis durante 14 días, sin tarjeta de crédito. Al
              introducir tu dirección de correo electrónico, aceptas recibir
              correos electrónicos de marketing de Eshopuy.
            </p>
          </div>
          <div className={styles.indexHeaderImg}></div>
        </div>
      </div>
      <div className={styles.indexPageContainer + " sideSpacing"}>
        <section className={styles.indexInfoContainer}>
          <div className={styles.indexSingleInfoSection + " select-disable"}>
            <span className="material-icons-outlined">storefront</span>
            <h6>Plantillas personalizables</h6>
            <p>
              Diseños de páginas web gratuitos para lanzar tu tienda de forma
              rápida y sencilla.
            </p>
          </div>
          <div className={styles.indexSingleInfoSection + " select-disable"}>
            <span className="material-icons-outlined">local_atm</span>
            <h6>Todo en uno</h6>
            <p>
              Eshopuy se ocupa de todo, desde el marketing y los pagos, hasta
              las transacciones seguras y los envíos.
            </p>
          </div>
          <div className={styles.indexSingleInfoSection + " select-disable"}>
            <span className="material-icons-outlined">group</span>
            <h6>Una plataforma segura y eficiente</h6>
            <p>
              Muchos usuarios confian en Eshopuy para gestionar sus tiendas
              online.
            </p>
          </div>
        </section>
        <section className={styles.brandsSection}>
          <div className={styles.brandSectionBorder}>
            <div className={styles.indexBrandLogo + " " + styles.cemex}></div>
            <div
              className={styles.indexBrandLogo + " " + styles.carniceria}
            ></div>
            <div
              className={styles.indexBrandLogo + " " + styles.casaSelva}
            ></div>
            <div className={styles.indexBrandLogo + " " + styles.chop}></div>
            <div
              className={styles.indexBrandLogo + " " + styles.colorindio}
            ></div>
            <div className={styles.indexBrandLogo + " " + styles.loly}></div>
            <div
              className={styles.indexBrandLogo + " " + styles.soyMacho}
            ></div>
            <div className={styles.indexBrandLogo + " " + styles.vorana}></div>
          </div>
        </section>
        <section className={styles.indexComentarySection + " sideSpacing"}>
          <div>
            <p>
              "Shopify es mejor que cualquier otra plataforma con la que hayamos
              trabajado, ¡y vaya si hemos probado!".
            </p>
            <strong>JONATHAN BAYME, CEO DE THEORY11</strong>
            <div className={styles.indexTryFreButton}>
              <Button color={ButtonColor.Primary} onClick={onClickRedirect}>
                Prueba gratis
              </Button>
            </div>
          </div>
        </section>
        <div className={styles.indexServicesContainer}>
          <Link href="/">Términos y servicios</Link>
          <Link href="/">Política de Privacidad</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
