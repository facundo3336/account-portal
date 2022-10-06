import { useContext, useState } from "react";
import { UserContext } from "../../context/user-context";
import { FloatButton } from "../FloatButton/FloatButton";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebar, setSidebar] = useState(false);

  const { user } = useContext(UserContext);

  const onClickSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layoutHeaderContainer}>
        <div className={styles.layoutHeader + " sideSpacing"}>
          <Header logo={true} transparent={false} center={false}>
            <span>{user?.username}</span>
          </Header>
        </div>
      </div>
      <div className={styles.layoutSidebarChildrenContainer}>
        <FloatButton onClick={onClickSidebar} />
        <div className={styles.layoutSidebar}>
          <Sidebar isOpen={sidebar} />
        </div>
        <div className={styles.layoutChildren}>{children}</div>
      </div>
    </div>
  );
};
