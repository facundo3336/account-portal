import { ReactNode } from "react";
import styles from "./StorePagesContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const StorePagesContainer = ({ children }: Props) => {
  return <div className={styles.storePagesContainer}>{children}</div>;
};
