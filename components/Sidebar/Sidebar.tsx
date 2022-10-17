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
          path="/shop/home"
          icon={"home"}
          itemName="Inicio"
        />
        <SidebarItem
          itemOptions={[]}
          path="/shop/orders"
          icon={"shopping_basket"}
          itemName="Pedidos"
        />
        <SidebarItem
          itemOptions={[
            { name: "Campañas de marketing", path: "" },
            { name: "Automatizaciones", path: "" },
          ]}
          path="/shop/marketing"
          icon={"track_changes"}
          itemName="Marketing"
        />
      </div>
    </div>
  );
};
