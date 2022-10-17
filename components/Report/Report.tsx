import styles from "./Report.module.scss";
import { Card } from "../Card/Card";

interface Props {
  title: string;
  description: string;
  link: string;
  reportData: string;
}

export const Report = ({ title, description, link, reportData }: Props) => {
  return (
    <div className={styles.reportContainer}>
      <Card size="tiny">
        <div>
          <div className={styles.reportInfo}>
            <div className={styles.reportTitleContainer}>
              <h3>{title}</h3>
              <p className={styles.reportDescription}>{description}</p>
            </div>
            <span>{reportData} -</span>
          </div>
          <div className={styles.reportLine}>
            <a href={link}>Ver informe</a>
          </div>
        </div>
      </Card>
    </div>
  );
};
