import styles from "./ReadMore.module.scss";

interface Props {
  description: string;
  linkText: string;
  link: string;
}

export const ReadMore = ({ description, linkText, link }: Props) => {
  return (
    <div className={styles.readMore}>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};
