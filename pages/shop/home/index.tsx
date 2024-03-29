import { NextPage } from "next";
import { useState } from "react";
import { Button, ButtonColor } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Layout } from "../../../components/Layout/Layout";
import { LoadingBar } from "../../../components/LoadingBar/LoadingBar";
import { ShopTask } from "../../../components/ShopTask/ShopTask";
import { StorePagesContainer } from "../../../components/StorePagesContainer/StorePagesContainer";
import { tasks } from "../../../tasksData";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const onClickTask = (index: number) => {
    setTaskIndex(index);
  };

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  const isOpenClass = isOpen ? "" : styles.isClose;

  return (
    <div>
      <Layout>
        <StorePagesContainer>
          <div className={styles.shopHomePage + " " + isOpenClass}>
            <Card size="info">
              <section className={styles.shopHomeSection + " light-box-shadow"}>
                <div className={styles.taskSectionTitleContainer}>
                  <div className={styles.arrowContainer}>
                    <span>Guia de configuracion</span>
                    <span
                      onClick={onClickOpen}
                      className={styles.tasksArrow + " material-icons-outlined"}
                    >
                      expand_more
                    </span>
                  </div>
                  <div className={styles.tasksText}>
                    <span>0 de {tasks.length} tareas completadas</span>
                    <div className={styles.loadingBarContainer}>
                      <LoadingBar
                        percentage={(Number(taskIndex) * tasks.length) / 100}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.tasksContainer}>
                  {tasks.map((task, index) => {
                    return (
                      <ShopTask
                        completed={task.completed}
                        onSelected={() => onClickTask(index)}
                        selected={taskIndex === index}
                        key={task.name}
                        task={task}
                      />
                    );
                  })}
                </div>
              </section>
            </Card>
            <Card size="info">
              <section
                className={
                  styles.shopHomeSection +
                  " " +
                  styles.homeExpressPay +
                  " light-box-shadow"
                }
              >
                <div className={styles.homeExpressPayContainer}>
                  <h3>
                    Agiliza el proceso de pago con los nuevos botones de pago
                    exprés de Eshopuy Email
                  </h3>
                  <p>
                    Con Shop Pay, permite que tus clientes compren un producto
                    nuevo desde su correo electrónico con unos pocos clics.
                  </p>
                  <div className={styles.tasksTryNowButton}>
                    <Button
                      textSize="sm"
                      onClick={() => {}}
                      color={ButtonColor.Primary900}
                    >
                      Probar ahora
                    </Button>
                  </div>
                </div>
              </section>
            </Card>

            <section>
              <InfoCard
                buttons={[
                  {
                    text: "Comenzar una campana",
                    onClick: () => {},
                    color: ButtonColor.Primary,
                  },
                ]}
                imageUrl="/tasks-img/email.svg"
                title="Mejora tu marketing con Shopify Email"
                description="El 99% de los consumidores verifica a diario su correo electrónico. Crea relaciones con los clientes y aumenta tus ventas gracias al correo electrónico, directamente desde el panel de control"
              />
            </section>
          </div>
        </StorePagesContainer>
      </Layout>
    </div>
  );
};

export default Home;
