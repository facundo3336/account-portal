import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./shopQuestionnaire.module.scss";
import { QUESTIONNARIE_DATA } from "../../questionnarieData";
import { Questionnaire } from "../../components/Questionnaire/Questionnaire";
import { Button, ButtonColor } from "../../components/Button/Button";
import { LoadingBar } from "../../components/LoadingBar/LoadingBar";
import Router from "next/router";
import { perecentageCompleted } from "../../utils/questionnaire";
import { Header } from "../../components/Header/Header";

const ShopQuestionnaire: NextPage = () => {
  const [countInfo, setCountInfo] = useState(0);
  const [info, setInfo] = useState(QUESTIONNARIE_DATA);
  const [percentageBar, setPercentageBar] = useState(1);

  useEffect(() => {
    setPercentageBar(perecentageCompleted(countInfo, info));
  }, [countInfo, info]);

  const onClickRedirect = () => {
    Router.push("/shop/home");
  };

  const onClickNext = () => {
    setCountInfo(countInfo + 1);
  };

  const onClickBack = () => {
    if (countInfo !== 0) {
      setCountInfo(countInfo - 1);
    }
  };

  return (
    <div className={styles.shopQuestionnaire + " sideSpacing"}>
      <div className={styles.shopQuestionnaireContainer}>
        <Header logo={true} center={false} transparent={false} />
        <div className={styles.loadingBarContainer}>
          <LoadingBar percentage={percentageBar} />
        </div>
        <Questionnaire questionnarieData={info[countInfo]} />
        <div>
          <div className={styles.buttonsContainer}>
            <div className={styles.arrowButtonContainer}>
              <Button onClick={onClickBack} color={ButtonColor.Default}>
                <div className={styles.arrowButton}>
                  <span className="material-icons-outlined">chevron_left</span>
                  <span>Atras</span>
                </div>
              </Button>
            </div>
            <div className={styles.nextButtonContainer}>
              <Button onClick={onClickRedirect} color={ButtonColor.Default}>
                Omitir
              </Button>
              <Button
                onClick={
                  countInfo === info.length - 1 ? onClickRedirect : onClickNext
                }
                color={ButtonColor.Primary}
              >
                {countInfo === info.length - 1 ? "Terminar" : "Siguiente"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopQuestionnaire;
