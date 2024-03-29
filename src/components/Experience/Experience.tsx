import * as React from 'react';
import cn from 'classnames';
import { Page } from 'components/layout/Page/Page';
import { CircleIcon } from 'components/layout/CircleIcon/CircleIcon';
import { data } from 'data';
import styles from './Experience.module.scss';

const Circle = () => <CircleIcon className={styles.circle} />;

const { experience } = data;

export const Experience = () => {
    return (
        <Page id="experience">
            <h2>Experience</h2>
            <div className={styles.root}>
                {experience.map(({ company, date, description, employe }, index) => (
                    <div
                        className={cn(
                            styles.block,
                            styles[`block_${(index + 1) % 2 === 0 ? 'right' : 'left'}`],
                        )}
                    >
                        <h3>{employe}</h3>
                        <div className={styles.block__text}>
                            <div>
                                <strong>{company} </strong>
                                <em>({date})</em>
                                <p>{description}</p>
                            </div>
                        </div>
                        <Circle />
                    </div>
                ))}
            </div>
        </Page>
    );
};
