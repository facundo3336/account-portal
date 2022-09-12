import Link from "next/link";
import styles from "./BussinessCard.module.scss";

interface Props {
  url: string;
  name: string;
}

export const BussinessCard = ({ url, name }: Props) => {
  return (
    <Link href={url}>
      <div className={styles.bussinessCard}>
        <div className={styles.buissinessCardIcon}>
          <span className="material-icons-outlined">storefront</span>
        </div>
        <div className={styles.bussinessCardTitle}>
          <h4>{name}</h4>
          <p>ramoncin@gmail.com</p>
        </div>
        <span className={styles.bussinesCardArrow + " material-icons-outlined"}>
          arrow_forward_ios
        </span>
      </div>
    </Link>
  );
};
