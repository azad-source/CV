import * as React from 'react';
import cn from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.root}>
            <div
                className={cn(styles.back_to_top, styles['back_to_top-show'])}
                id="goTopBtn"
                title="Наверх"
            >
                <i className={cn(styles.fas, styles['fa-arrow-up'])} />
            </div>
            <div className={styles.copyright}>© Azad MAMEDOV | CV | 2022</div>
        </footer>
    );
};
