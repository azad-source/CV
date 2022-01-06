import * as React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.root}>
            <nav>
                <ul>
                    <li>
                        <a className={styles['scroll-to']} href="#about" title="About">
                            About
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#experience" title="Experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#education" title="Education">
                            Education
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#portfolios" title="Portfolios">
                            Portfolios
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#skills" title="Skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#languages" title="Languages">
                            Languages
                        </a>
                    </li>
                    <li>
                        <a className={styles['scroll-to']} href="#contact" title="Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles['burger-menu-wrap']}>
                <i className={styles['fas fa-bars burger-menu-icon']} id="burger_menu" />
            </div>
            <div className={styles['burger-menu-overlay']} id="burger_menu_overlay" />
            <nav className={styles.mobile}>
                <div className={styles['mobile-header-nav']}>
                    <div className={styles['mobile-ava-wrapper']}>
                        <img
                            src="https://azad-source.github.io/CV/dist/48d35aba1536b813840a1cc1c2de5f5b.png"
                            alt="avatar"
                        />
                        <span className={styles['mobile-ava-name']}>Azad MAMEDOV</span>
                    </div>
                    <i
                        className={styles['fas fa-times burger-menu-close']}
                        id="burger_menu_close"
                    />
                    <ul>
                        <li>
                            <a className={styles['scroll-to']} href="#about" title="About">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles['scroll-to']}
                                href="#experience"
                                title="Experience"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a className={styles['scroll-to']} href="#education" title="Education">
                                Education
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles['scroll-to']}
                                href="#portfolios"
                                title="Portfolios"
                            >
                                Portfolios
                            </a>
                        </li>
                        <li>
                            <a className={styles['scroll-to']} href="#skills" title="Skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className={styles['scroll-to']} href="#languages" title="Languages">
                                Languages
                            </a>
                        </li>
                        <li>
                            <a className={styles['scroll-to']} href="#contact" title="Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
