import * as React from 'react';
import { Page } from 'components/layout/Page/Page';
import { data } from 'data';
import { capitalize } from 'helpers/stringHelper';
import styles from './Languages.module.scss';

const { languages } = data;

export const Languages = () => {
    return (
        <Page id="languages">
            <h2>Languages</h2>
            <ul className={styles.items}>
                {languages.map(({ language, level, description }) => (
                    <li key={language} className={styles.item}>
                        <span className={styles.item__name}>{capitalize(language)}:</span>
                        <span>
                            ( {level} {description} )
                        </span>
                    </li>
                ))}
            </ul>
        </Page>
    );
};
