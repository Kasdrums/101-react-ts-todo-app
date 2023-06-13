import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    title?: string;
    disabled?: boolean;
    children: ReactNode;
}

function Button({ onClick, children, title, disabled = false, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={styles.button}
            onClick={onClick}
            title={title}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
