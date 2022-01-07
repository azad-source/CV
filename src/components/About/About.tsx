import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page } from 'components/layout/Page/Page';
import { Button } from 'components/layout/Button/Button';
import { data } from 'data';
import styles from './About.module.scss';

const {
    avatar,
    contacts: { eMail, telegram, facebook, linkedin, position, name },
    about,
} = data;
const socials = [eMail, telegram, facebook, linkedin];

export const About = () => {
    return (
        <Page className={styles.root} id="about">
            <div className={styles['about-block-1']}>
                <h1>{name.title}</h1>
                <div className={styles.position}>{position.title}</div>
                <div className={styles['ava-wrapper']}>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
            <div className={styles['about-block-2']}>
                <div className={styles['social-wrap']}>
                    <ul>
                        {socials.map(({ href, title, icon }) => (
                            <li key={href}>
                                <a href={href} title={title} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className={styles.soicalIcon}
                                        size="2x"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['about-text']}>
                    <p>{about}</p>
                </div>
                <div className={styles['btn-cv-wrap']}>
                    <Button id="download_pdf">Download CV En</Button>
                    <Button id="download_pdf">Download CV Fr</Button>
                </div>
            </div>
        </Page>
    );
};
