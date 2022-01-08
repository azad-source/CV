import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import cn from 'classnames';
import styles from './CircleIcon.module.scss';

interface Props {
    className?: string;
}

export const CircleIcon: React.FC<Props> = ({ className }) => (
    <FontAwesomeIcon icon={faCircle} className={cn(styles.root, className)} />
);

CircleIcon.defaultProps = {
    className: undefined,
};
