import * as React from 'react';
import { Page } from 'components/layout/Page/Page';
import styles from './Portfolios.module.scss';

export const Portfolios = () => {
    return (
        <Page id="portfolios">
            <h2>Portfolios</h2>
            <div className={styles['portfolios-wrap']}>
                <h3 className={styles['portfolios-title']}>Java Script ES5/ES6/ES7</h3>
                <div className={styles['portfolios-list']}>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/webdev/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/587ac7cbe687b7dc5705763be8020cd5.png"
                                    alt="Webdev"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>Webdev</div>
                        </a>
                    </div>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/calculator/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/dc192a6a6e4eded3f3fe4e4c89d0a13d.png"
                                    alt="Calculator"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>Calculator</div>
                        </a>
                    </div>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/momentum/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/1e135c6b3ffa7dc77ad439bebcb89609.png"
                                    alt="Momentum"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>Momentum</div>
                        </a>
                    </div>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/virtual-keyboard/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/0b01f184c4499624f2c344cf508c79bc.png"
                                    alt="Virtual keyboard"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>
                                Virtual keyboard
                            </div>
                        </a>
                    </div>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/pure-water/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/0b5dc269b3bd5c6b2fdde301de0565d3.png"
                                    alt="Pure water"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>Pure water</div>
                        </a>
                    </div>
                    <div className={styles['portfolios-list-item']}>
                        <a href="./portfolios/timeline-dashboard/" target="_blank">
                            <div className={styles['portfolios-list-item-img']}>
                                <img
                                    src="https://azad-source.github.io/CV/dist/ddcd3833c29d8dcd1e891b04c9b35edb.png"
                                    alt="Timeline dashboard"
                                />
                            </div>
                            <div className={styles['portfolios-list-item-name']}>
                                Timeline dashboard
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Page>
    );
};
