import * as React from 'react';
import { Page } from 'components/layout/Page/Page';
import styles from './Languages.module.scss';

export const Languages = () => {
    return (
        <Page id="languages">
            <h2>Languages</h2>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <span className={styles.item__name}>English:</span>
                    <span>( A2 intermediate, conversational, competent )</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.item__name}>French:</span>
                    <span>
                        ( B1 had experience of correspondence and communication with native speakers
                        )
                    </span>
                </li>
            </ul>
        </Page>
    );
};
