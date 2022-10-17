import styles from "./SocialMedia.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  linkLabel: string;
  link: string;
}

export const SocialMedia = ({
  imageUrl,
  title,
  description,
  linkLabel,
  link,
}: Props) => {
  return (
    <div className={styles.socialMedia}>
      <div
        style={{
          backgroundImage: "url(" + imageUrl + ")",
        }}
        className={styles.socialMediaImg}
      ></div>
      <div className={styles.socialMediaInfo}>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={link}>{linkLabel}</a>
      </div>
    </div>
  );
};
