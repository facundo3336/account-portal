import { Button, ButtonColor } from "../Button/Button";
import { Card } from "../Card/Card";
import styles from "./Info-Card.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    onClick: () => void;
    color: ButtonColor;
  }[];
}

export const InfoCard = ({ imageUrl, title, description, buttons }: Props) => {
  return (
    <Card size="info">
      <div className={styles.infoCard}>
        <div
          className={styles.infoCardImg}
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        ></div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.infoCardButton}>
          {buttons.map((button) => {
            return (
              <Button
                key={button.text}
                textSize="sm"
                onClick={button.onClick}
                color={button.color}
              >
                {button.text}
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
