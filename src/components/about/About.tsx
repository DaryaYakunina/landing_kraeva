import styles from './About.module.scss';

interface IAboutProps {
  photoUrl: string;
  title: string;
  text: string;
  caption: string;
}

function About (props:IAboutProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.photoWrapper}>
          <img src={props.photoUrl} alt={props.title} className={styles.photo} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.text}>{props.text}</p>
          <p className={styles.caption}>{props.caption}</p>
        </div>
      </div>
    </section>
  );
};

export default About;