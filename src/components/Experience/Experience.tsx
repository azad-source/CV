import * as React from 'react';
import cn from 'classnames';
import { Page } from 'components/layout/Page/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Experience.module.scss';

export const Experience = () => {
    return (
        <Page className={styles.root} id="experience">
            <h2>Experience</h2>
            <div className={styles['experience-wrap']}>
                <div className={cn(styles['experience-block'], styles['experience-block-left'])}>
                    <h3>Mechanical Engineer</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>Safran SMARTEC - Samara </strong>
                            <em>(feb 2014 - dec 2018)</em>
                            <p>
                                Structural linear and nonlinear analysis of the intermediate engine
                                mount for LEAP-1, starting from the creation of finite element
                                model, application of boundary conditions and definition materials
                                property, and ending with the launch of the calculation and post
                                processing of results. Life time calculation and modal analysis to
                                determine natural frequencies. Software I used: ICEM (to create the
                                mesh) Patran (to create meshing and boundary conditions) Ansys
                                Workbench (for geometry preparation, to create mesh, boundary
                                condition and to start the calculation) Samcef (to create condition
                                to the limits and launch of the linear / non-linear computation
                                (asef / mechanics)) Abaqus (to create boundary condition and to
                                start the computation linear / nonlinear) At the end, an analysis of
                                the results, and a report.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faCircle} className={styles['experience-point']} />
                </div>
                <div className={cn(styles['experience-block'], styles['experience-block-right'])}>
                    <h3>Web Developer</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>Plusmedia - Samara </strong>
                            <em>(jan 2019 – feb 2021)</em>
                            <p>
                                Development, support and seo promotion of websites of any complexity
                                on cms modx, bitrix, simpla, wordperss, joomla. Working with API of
                                modx and bitrix. Preparing of environment for the website release,
                                installation of modules (nginx, apache, php, sql etc) and their
                                configuration. Request processing speed optimization on the website.
                                Languages used in development: html5, css3, javascript, jquery, php,
                                mysql. At the moment I am studying the development of websites on
                                React.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faCircle} className={styles['experience-point']} />
                </div>
                <div className={cn(styles['experience-block'], styles['experience-block-left'])}>
                    <h3>frontend developer</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>SKB Kontur </strong>
                            <em>(mar 2021 – to Present)</em>
                            <p>
                                Develop the SPA in React JS framework, working with Redux
                                architecture using complex Object-Oriented concepts in improving the
                                performance of the websites.
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faCircle} className={styles['experience-point']} />
                </div>
            </div>
        </Page>
    );
};
