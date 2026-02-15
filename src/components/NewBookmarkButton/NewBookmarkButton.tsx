import React from 'react';
import * as styles from './NewBookmarkButton.css';

interface NewBookmarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    state?: 'default' | 'hover';
}

export const NewBookmarkButton: React.FC<NewBookmarkButtonProps> = ({
    className,
    state,
    disabled,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`${styles.button} ${state === 'hover' ? styles.hoverState : ''} ${className || ''}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            <span className={styles.icon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
                </svg>
            </span>
            新規ブックマーク
        </button>
    );
};
