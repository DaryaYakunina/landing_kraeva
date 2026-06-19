import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
        <Link to="mailto:darya.yakunina.91@yandex.ru" className={styles.mailAddress}>aesthetic@yandex.ru</Link>
        <div className={styles.social}>
            <Link to="https://t.me/nadin_kraeva" className={styles.socialItem}>
                <img className={styles.image} src="../../../images/icon-telegram.png"/>
            </Link>
            <Link to="mailto:darya.yakunina.91@yandex.ru" className={styles.socialItem}>
                <img className={styles.image} src="../../../images/icon-mail.png"/>
            </Link>
        </div>
    </footer>
  );
};

export default Footer;