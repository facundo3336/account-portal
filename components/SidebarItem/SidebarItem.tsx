import { Router, useRouter } from "next/router";
import { SidebarItemOption } from "../SidebarItemOption/SidebarItemOption";
import styles from "./SidebarItem.module.scss";

interface Props {
  itemName: string;
  icon: string;
  itemOptions: {
    name: string;
    path: string;
  }[];
  path: string;
}

export const SidebarItem = ({ itemName, icon, itemOptions, path }: Props) => {
  const router = useRouter();

  const isSelected = router.pathname === path;

  const isOpen = router.pathname.startsWith(path);

  const onClickRedirect = () => {
    router.push(path);
  };

  return (
    <div>
      <div
        onClick={onClickRedirect}
        aria-selected={isSelected}
        className={styles.itemIconContainer}
      >
        <span className="material-icons-outlined">{icon}</span>
        <h5>{itemName}</h5>
      </div>
      {itemOptions && (
        <ul aria-hidden={!isOpen} className={styles.itemOptionsContainer}>
          {itemOptions.map((option) => {
            return (
              <SidebarItemOption
                key={option.name}
                path={option.path}
                optionName={option.name}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
