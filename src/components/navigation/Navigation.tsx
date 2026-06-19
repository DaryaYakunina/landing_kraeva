import styles from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
            <HashLink smooth to="/#main" className={styles.logo}>Надежда Краева</HashLink>
            
            <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
            
            <ul className={`${styles.navMenu} ${isOpen ? styles.navMenuOpen : ''}`}>
                <div className={styles.navSubMenu}>
                    <li>
                        <HashLink smooth to="/#services"  onClick={closeMenu}>Услуги</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#gallery"  onClick={closeMenu}>Галерея</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#testimonials"  onClick={closeMenu}>Отзывы</HashLink>
                    </li>
                </div>
                <li className={styles.consultBtn}>
                    <HashLink smooth to="/#consultation"  onClick={closeMenu}>
                        Записаться на консультацию
                    </HashLink>
                </li>
            </ul>
        </nav> 
    );
};

export default Navigation;