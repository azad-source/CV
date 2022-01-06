import * as React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Page } from 'components/layout/Page/Page';
import { Button } from 'components/layout/Button/Button';
import styles from './About.module.scss';

export const About = () => {
    return (
        <Page className={styles.root} id="about">
            <div className={styles['about-block-1']}>
                <h1>Azad MAMEDOV</h1>
                <div className={styles.position}>Frontend Developer</div>
                <div className={styles['ava-wrapper']}>
                    <img
                        src="https://azad-source.github.io/CV/dist/48d35aba1536b813840a1cc1c2de5f5b.png"
                        alt="avatar"
                    />
                </div>
            </div>
            <div className={styles['about-block-2']}>
                <div className={styles['social-wrap']}>
                    <ul>
                        <li>
                            <a
                                href="mailto:azad_63_mamedov@mail.ru"
                                title="azad_63_mamedov@mail.ru"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className={styles.soicalIcon}
                                    size="2x"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/azad_63_mamedov"
                                title="@azad_63_mamedov"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faTelegram}
                                    className={styles.soicalIcon}
                                    size="2x"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/azad.mamedov.338/"
                                title="azad.mamedov.338"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className={styles.soicalIcon}
                                    size="2x"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/azad-mamedov-0563489a/"
                                title="azad-mamedov-0563489a"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className={styles.soicalIcon}
                                    size="2x"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cn(styles['about-text'], styles['content-wrapper'])}>
                    <p>
                        I have more than 3 years of experience in web development and I really like
                        to work with customers and provide high-quality service and quick responses.
                        I like to discover new technologies, search out for effective decisions, and
                        grow as a professional. Working with a variety of technologies and tools
                        helps me to use proven best practices for existing challenges, predict
                        application behavior and prevent bugs and incidents. Contact me if you want
                        to work with a reliable and experienced developer. Lets get the job done!
                    </p>
                </div>
                <div className={styles['btn-cv-wrap']}>
                    <Button id="download_pdf">Download CV En</Button>
                    <Button id="download_pdf">Download CV Fr</Button>
                </div>
            </div>
        </Page>
    );
};
