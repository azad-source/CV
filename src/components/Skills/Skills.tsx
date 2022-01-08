import * as React from 'react';
import cn from 'classnames';
import { Page } from 'components/layout/Page/Page';
import { data } from 'data';
import { capitalize } from 'helpers/stringHelper';
import styles from './Skills.module.scss';

const { skills } = data;

export const Skills = () => {
    return (
        <Page id="skills">
            <h2>Skills</h2>
            <div className={styles.root}>
                {skills.map(({ title, items }, index) => (
                    <div key={title} className={cn(styles.block, styles[`block-${index + 1}`])}>
                        <h4>{capitalize(title)}</h4>
                        {items.map(({ name, progress }) => (
                            <div className={styles.item}>
                                <div className={styles.item__title}>
                                    <span className={styles.item__title__percent}>{progress}</span>
                                    <span className={styles.item__title__item}>{name}</span>
                                </div>
                                <div className={styles.item__max} />
                                <div className={styles.item__current} style={{ width: progress }}>
                                    <div className={styles.item__current__inner} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Page>
    );
};
