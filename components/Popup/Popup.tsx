import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Popup.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Popup = ({ children }: Props) => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className={styles.container}>
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        timeout={200}
        classNames="popup"
      >
        <div className={styles.content}>{children}</div>
      </CSSTransition>
    </div>
  );
};
