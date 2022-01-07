import * as React from 'react';
import cn from 'classnames';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from 'helpers/stringHelper';
import styles from './Header.module.scss';

const MENU = ['about', 'experience', 'education', 'portfolios', 'skills', 'languages', 'contacts'];

export const Header = () => {
    const defaultStyle = { transform: 'translateX(-105%)' };
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const [styleMenu, setStyleMenu] = React.useState(defaultStyle);

    const showMenu = () => {
        setStyleMenu({ transform: 'translateX(0)' });
        setShowMobileMenu(true);
    };
    const closeMenu = () => {
        setStyleMenu(defaultStyle);
        setShowMobileMenu(false);
    };

    React.useEffect(() => {
        window.addEventListener('resize', closeMenu);
        return () => window.removeEventListener('resize', closeMenu);
    }, []);

    const menuList = (
        <ul>
            {MENU.map((item) => {
                const name = capitalize(item);
                return (
                    <li>
                        <a
                            className={styles['scroll-to']}
                            href={`#${item}`}
                            title={name}
                            onClick={closeMenu}
                        >
                            {name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header className={styles.root}>
            <nav>{menuList}</nav>
            <button className={styles['burger-menu-wrap']} onClick={showMenu} type="button">
                <FontAwesomeIcon icon={faBars} className={styles['burger-menu-icon']} />
            </button>
            <div className={cn(showMobileMenu && styles.overlay)} onClick={closeMenu} />

            <nav className={styles.mobile} style={styleMenu}>
                <div className={styles['mobile-ava-wrapper']}>
                    <img
                        src="https://azad-source.github.io/CV/dist/48d35aba1536b813840a1cc1c2de5f5b.png"
                        alt="avatar"
                    />
                    <span className={styles['mobile-ava-name']}>Azad MAMEDOV</span>
                </div>
                <button onClick={closeMenu} className={styles['burger-menu-close']} type="button">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {menuList}
            </nav>
        </header>
    );
};
