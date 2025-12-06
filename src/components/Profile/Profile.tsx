import React from 'react';
import * as styles from './Profile.css';

interface ProfileProps {
    variant?: 'icon' | 'initial';
    initial?: string;
    className?: string;
}

export const Profile: React.FC<ProfileProps> = ({
    variant = 'icon',
    initial = 'T',
    className
}) => {
    return (
        <div className={`${styles.container} ${styles.variant[variant]} ${className || ''}`}>
            {variant === 'icon' ? (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.icon}
                    aria-hidden="true"
                >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ) : (
                <span className={styles.text}>{initial.charAt(0).toUpperCase()}</span>
            )}
        </div>
    );
};
