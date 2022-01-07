import * as React from 'react';
import cn from 'classnames';
import { Page } from 'components/layout/Page/Page';
import styles from './Skills.module.scss';

export const Skills = () => {
    return (
        <Page id="skills">
            <h2>Skills</h2>
            <div className={styles['skills-wrap']}>
                <div className={cn(styles['skills-block'], styles['skills-block-1'])}>
                    <h4>CMS / Frameworks / library</h4>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>45%</span>
                            <span className={styles['skill-progress-title-item']}>
                                ReactJS, Redux
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '45%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>45%</span>
                            <span className={styles['skill-progress-title-item']}>
                                React Components
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '45%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>30%</span>
                            <span className={styles['skill-progress-title-item']}>Node JS</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '30%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>70%</span>
                            <span className={styles['skill-progress-title-item']}>
                                Bitrix, MODX, WordPress
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '70%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>70%</span>
                            <span className={styles['skill-progress-title-item']}>Jquery</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '70%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                </div>
                <div className={cn(styles['skills-block'], styles['skills-block-2'])}>
                    <h4>Languages</h4>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>90%</span>
                            <span className={styles['skill-progress-title-item']}>HTML5</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '90%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>90%</span>
                            <span className={styles['skill-progress-title-item']}>CSS3</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '90%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>
                                JavaScript ES5/6/7
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>TypeScript</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>PHP7+</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>SQL</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                </div>
                <div className={cn(styles['skills-block'], styles['skills-block-3'])}>
                    <h4>Other</h4>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>linux</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>45%</span>
                            <span className={styles['skill-progress-title-item']}>
                                apache/nginx
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '45%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>
                                git/git flow
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>10%</span>
                            <span className={styles['skill-progress-title-item']}>
                                webpack/gulp
                            </span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '10%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>60%</span>
                            <span className={styles['skill-progress-title-item']}>SASS/LESS</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '60%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>40%</span>
                            <span className={styles['skill-progress-title-item']}>Storybook</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '40%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                    <div className={styles['skill-progress']}>
                        <div className={styles['skill-progress-title']}>
                            <span className={styles['skill-progress-title-percent']}>20%</span>
                            <span className={styles['skill-progress-title-item']}>MongoDB</span>
                        </div>
                        <div className={styles['skill-progress-max']} />
                        <div className={styles['skill-progress-current']} style={{ width: '20%' }}>
                            <div className={styles['skill-progress-current-inner']} />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};
