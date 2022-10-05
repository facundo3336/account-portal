import { useRouter } from "next/router";
import styles from "./SidebarItemOption.module.scss";

interface Props {
  optionName: string;
  path: string;
}

export const SidebarItemOption = ({ optionName, path }: Props) => {
  const router = useRouter();

  const isSelected = router.pathname === path;

  return (
    <li className={styles.itemOption} aria-selected={isSelected}>
      {optionName}
    </li>
  );
};
