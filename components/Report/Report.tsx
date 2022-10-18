import styles from "./Report.module.scss";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";

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
            <Title underline={true} title={title} description={description} />
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
