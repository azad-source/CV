import * as React from 'react';
import cn from 'classnames';
import styles from './Page.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Page: React.FC<Props> = ({ children, className, id }) => {
    return (
        <section className={cn(styles.root, className)} id={id}>
            {children}
        </section>
    );
};

Page.defaultProps = {
    className: undefined,
    id: undefined,
};
