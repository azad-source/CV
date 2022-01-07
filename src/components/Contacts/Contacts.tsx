import * as React from 'react';
import { Page } from 'components/layout/Page/Page';
import styles from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <Page id="contacts">
            <h2>Contacts</h2>
            <div className={styles['contacts-wrapper']}>
                <ul className={styles['contacts-items']}>
                    <li>
                        <span className={styles['contacts-item-name']}>Name: </span>
                        <span className={styles['contacts-item-value']}>Azad MAMEDOV</span>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Position: </span>
                        <span className={styles['contacts-item-value']}>Frontend Developer</span>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Country: </span>
                        <span className={styles['contacts-item-value']}>Russia</span>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Region: </span>
                        <span className={styles['contacts-item-value']}>Samarskaya oblast</span>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>City: </span>
                        <span className={styles['contacts-item-value']}>Samara</span>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>E-mail: </span>
                        <a
                            className={styles['contacts-item-value']}
                            href="mailto:azad_63_mamedov@mail.ru"
                        >
                            azad_63_mamedov@mail.ru
                        </a>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Telegram: </span>
                        <a
                            className={styles['contacts-item-value']}
                            href="https://t.me/azad_63_mamedov"
                        >
                            @azad_63_mamedov
                        </a>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Facebook: </span>
                        <a
                            className={styles['contacts-item-value']}
                            href="https://www.facebook.com/azad.mamedov.338/"
                        >
                            azad.mamedov.338
                        </a>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Linkedin: </span>
                        <a
                            className={styles['contacts-item-value']}
                            href="https://www.linkedin.com/in/azad-mamedov-0563489a/"
                        >
                            azad-mamedov-0563489a
                        </a>
                    </li>
                    <li>
                        <span className={styles['contacts-item-name']}>Phone: </span>
                        <a className={styles['contacts-item-value']} href="tel:+79276951562">
                            +7 927 695 15 62
                        </a>
                    </li>
                </ul>
                <div className={styles['contacts-photo']}>
                    <img
                        src="https://azad-source.github.io/CV/dist/48d35aba1536b813840a1cc1c2de5f5b.png"
                        alt="avatar"
                    />
                </div>
            </div>
        </Page>
    );
};
