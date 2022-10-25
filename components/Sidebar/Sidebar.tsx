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
          itemOptions={[
            {
              name: "Preliminares",
              path: "/shop/orders/preliminaries",
            },
            {
              name: "Pedidos abandonados",
              path: "/shop/orders/abandoned-orders",
            },
          ]}
          path="/shop/orders"
          icon={"shopping_basket"}
          itemName="Pedidos"
        />
        <SidebarItem
          itemOptions={[
            {
              name: "Inventario",
              path: "/shop/products/inventory",
            },
            {
              name: "Transferencias",
              path: "/shop/products/transfers",
            },
            {
              name: "Tarjetas de regalo",
              path: "/shop/products/gift-cards",
            },
          ]}
          path="/shop/products"
          icon={"shopping_bag"}
          itemName="Productos"
        />
        <SidebarItem
          itemOptions={[]}
          path="/shop/customers"
          icon={"person_outline"}
          itemName="Clientes"
        />

        <SidebarItem
          itemOptions={[
            {
              name: "Campañas de marketing",
              path: "/shop/marketing/marketing-campaign",
            },
            { name: "Automatizaciones", path: "/shop/marketing/automations" },
          ]}
          path="/shop/marketing"
          icon={"track_changes"}
          itemName="Marketing"
        />
        <SidebarItem
          itemOptions={[]}
          path="/shop/discount"
          icon={"discount"}
          itemName="Descuentos"
        />
      </div>
    </div>
  );
};
