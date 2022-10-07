import { Button, ButtonColor } from "../Button/Button";
import { Card } from "../Card/Card";
import styles from "./Info-Card.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

export const InfoCard = ({
  imageUrl,
  title,
  description,
  buttonText,
  onClick,
}: Props) => {
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
          <Button textSize="sm" onClick={onClick} color={ButtonColor.Primary}>
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};
