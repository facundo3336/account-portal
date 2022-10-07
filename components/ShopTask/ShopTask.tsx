import styles from "./ShopTask.module.scss";
import { Button, ButtonColor } from "../Button/Button";

interface Props {
  task: {
    name: string;
    description: string;
    buttonText: string;
    imgName: string;
  };
  selected: boolean;
  onSelected: () => void;
  completed: boolean;
}

export const ShopTask = ({ task, selected, onSelected, completed }: Props) => {
  const imgRoute = "/tasks-img/" + task.imgName;
  return (
    <div
      key={task.name}
      className={styles.taskContainer}
      aria-selected={selected}
    >
      <div>
        <div onClick={() => onSelected()} className={styles.taskTitleContainer}>
          {completed ? (
            <span className={"material-icons-outlined " + styles.tickSelected}>
              check_circle
            </span>
          ) : (
            <span className="material-icons-outlined">circle</span>
          )}

          <h5>{task.name}</h5>
        </div>
        <div className={styles.taskDescriptionContainer}>
          <div className={styles.taskDescription}>
            <p>{task.description}</p>
            <div className={styles.taskButton}>
              <Button
                textSize="sm"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                color={ButtonColor.Secondary700}
              >
                {task.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(" + imgRoute + ".svg)" }}
        className={styles.taskImg}
      ></div>
    </div>
  );
};
