import { useState } from "react";
import { FloatButton } from "../FloatButton/FloatButton";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
  user: string;
}

export const Layout = ({ children, user }: Props) => {
  const [sidebar, setSidebar] = useState(false);

  const onClickSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="sideSpacing">
        <Header logo={true} transparent={false} center={false}>
          {user}
        </Header>
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
