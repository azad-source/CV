import * as React from 'react';
import cn from 'classnames';
import { Page } from 'components/layout/Page/Page';
import { CircleIcon } from 'components/layout/CircleIcon/CircleIcon';
import styles from './Education.module.scss';

const Circle = () => <CircleIcon className={styles.circle} />;

export const Education = () => {
    return (
        <Page id="education">
            <h2>Education</h2>
            <div className={styles['experience-wrap']}>
                <div className={cn(styles['experience-block'], styles['experience-block-left'])}>
                    <h3>Bachelor Of Engineering (aircraft engines and power plants)</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>Samara State Aerospace University </strong>
                            <em>(september 2008 - july 2011)</em>
                            <p />
                        </div>
                    </div>
                    <Circle />
                </div>
                <div className={cn(styles['experience-block'], styles['experience-block-right'])}>
                    <h3>Master Of Engineering (Aircraft Engine)</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>Samara State Aerospace University </strong>
                            <em>(september 2011 - july 2014)</em>
                            <p />
                        </div>
                    </div>
                    <Circle />
                </div>
                <div className={cn(styles['experience-block'], styles['experience-block-left'])}>
                    <h3>Frontend developer</h3>
                    <div className={styles['experience-block-text']}>
                        <div>
                            <strong>EPAM courses </strong>
                            <em>(september 2020 - december 2020)</em>
                            <p>
                                JS Core, Event Loop, JavaScript Asynchronous, features of es6/7/8,
                                ReactJS
                            </p>
                        </div>
                    </div>
                    <Circle />
                </div>
            </div>
        </Page>
    );
};
