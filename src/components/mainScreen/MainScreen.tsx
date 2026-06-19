import styles from './MainScreen.module.scss';
import { HashLink } from 'react-router-hash-link';
import icon_phone_call from '../../../public/images/icon_phone_call.png';


function MainScreen() {
  return (
    <section id="main" className={styles.mainScreen}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
            <div className={styles.title_start}>
                    ЭСТЕТИКА
                <p className={styles.title_end}>
                    Надежды
                </p>
            </div>
            <p className={styles.subtitle}>
                Пространства, наполненные вдохновением
            </p>
            <HashLink smooth to="/#consultation" className={styles.circleBtn}>
                <img className={styles.icon} src={icon_phone_call} alt="Телефонная трубка" />
            </HashLink>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;