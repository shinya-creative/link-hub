import React from 'react';
import * as styles from './SaveButton.css';

export type SaveButtonVariant = 'primary' | 'secondary';
export type SaveButtonSize = 'medium' | 'small';

interface SaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: SaveButtonVariant;
    size?: SaveButtonSize;
    children: React.ReactNode;
}

export const SaveButton: React.FC<SaveButtonProps> = ({
    className,
    variant = 'primary',
    size = 'medium',
    children,
    disabled,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`${styles.variants[variant]} ${styles.sizes[size]} ${className || ''}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};
