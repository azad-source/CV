import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page } from 'components/layout/Page/Page';
import { Button } from 'components/layout/Button/Button';
import { data } from 'data';
import { CV } from 'components/layout/CV/CV';
import styles from './About.module.scss';

const { avatar, name, position, contacts, about } = data;

const socials = contacts.filter(({ title }) =>
    ['e-mail', 'telegram', 'facebook', 'linkedin'].includes(title),
);

const myCV = new CV();

export const About = () => {
    const downloadCV = () => myCV.download();

    return (
        <Page className={styles.root} id="about">
            <div className={styles.block_1}>
                <h1>{name}</h1>
                <div className={styles.position}>{position}</div>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
            <div className={styles.block_2}>
                <div className={styles.socials}>
                    <ul>
                        {socials.map(({ href, value, icon }) => (
                            <li key={href}>
                                {!!href && !!icon && (
                                    <a href={href} title={value} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon
                                            icon={icon}
                                            className={styles.soicalIcon}
                                            size="2x"
                                        />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.text}>
                    <p>{about}</p>
                </div>
                <Button id="download_pdf" onClick={downloadCV}>
                    Download CV
                </Button>
            </div>
        </Page>
    );
};
