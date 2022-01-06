import * as React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.root}>
            <div className={styles['back_to_top back_to_top-show']} id="goTopBtn" title="Наверх">
                <i className={styles['fas fa-arrow-up']} />
            </div>
            <div className={styles.copyright}>© Azad MAMEDOV | CV | 2022</div>
        </footer>
    );
};
