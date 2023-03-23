import { useRouter } from "next/router";
import styles from "./SidebarItemOption.module.scss";
import clsx from "clsx";

interface Props {
  optionName: string;
  path: string;
}

export const SidebarItemOption = ({ optionName, path }: Props) => {
  const router = useRouter();

  const isSelected = router.pathname === path;

  const onClickRedirect = () => {
    router.push(path);
  };
  const classes = clsx(styles.itemOption, { [styles.selected]: isSelected });
  return (
    <li onClick={onClickRedirect} className={classes}>
      {optionName}
    </li>
  );
};
