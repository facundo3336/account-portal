import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

interface Props {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: Props) => {
  const isOpenClass = isOpen ? styles["isOpenClass"] : "";

  return (
    <div className={styles.sidebarContainer + " " + isOpenClass}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarLogo}></div>
        <SidebarItem
          itemOptions={[]}
          path="/stores"
          icon={"home"}
          itemName="Inicio"
        />
      </div>
    </div>
  );
};
