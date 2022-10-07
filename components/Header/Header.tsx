import Router from "next/router";
import styles from "./Header.module.scss";

interface Props {
  children?: React.ReactNode;
  border?: boolean;
  transparent: boolean;
  center: boolean;
  logo: boolean;
}

export const Header = ({
  children,
  border,
  transparent,
  center,
  logo,
}: Props) => {
  const borderClass = border ? styles["greyBorder"] : "";

  const transparentClass = transparent ? styles["transparent"] : "";
  const centerClass = center ? styles["center"] : "";

  const onClickRedirect = () => {
    Router.push("/");
  };

  return (
    <header
      className={[
        styles.header,
        borderClass,
        transparentClass,
        centerClass,
      ].join(" ")}
    >
      {logo && (
        <div onClick={onClickRedirect} className={styles.headerImg}></div>
      )}
      <div>{children}</div>
    </header>
  );
};
