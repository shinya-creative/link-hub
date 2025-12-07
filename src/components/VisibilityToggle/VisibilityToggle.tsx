import React from 'react';
import * as styles from './VisibilityToggle.css';

interface VisibilityToggleProps {
    isVisible: boolean;
    onToggle?: () => void;
    className?: string;
}

export const VisibilityToggle: React.FC<VisibilityToggleProps> = ({
    isVisible,
    onToggle,
    className
}) => {
    return (
        <button
            type="button"
            className={`${styles.button} ${className || ''}`}
            onClick={onToggle}
            aria-label={isVisible ? "Hide password" : "Show password"}
        >
            {isVisible ? (
                // Open Eye
                <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                >
                    <path
                        d="M7.33333 0C4 0 1.15333 2.07333 0 5C1.15333 7.92667 4 10 7.33333 10C10.6667 10 13.5133 7.92667 14.6667 5C13.5133 2.07333 10.6667 0 7.33333 0ZM7.33333 8.33333C5.49333 8.33333 4 6.84 4 5C4 3.16 5.49333 1.66667 7.33333 1.66667C9.17333 1.66667 10.6667 3.16 10.6667 5C10.6667 6.84 9.17333 8.33333 7.33333 8.33333ZM7.33333 3C6.22667 3 5.33333 3.89333 5.33333 5C5.33333 6.10667 6.22667 7 7.33333 7C8.44 7 9.33333 6.10667 9.33333 5C9.33333 3.89333 8.44 3 7.33333 3Z"
                        fill="currentColor"
                    />
                </svg>
            ) : (
                <svg
                    width="15"
                    height="5"
                    viewBox="0 0 15 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                >
                    <path
                        d="M7.33333 3.66667C4.8 3.66667 2.53333 2.26667 1.46667 0H0C1.13333 2.93333 4 5 7.33333 5C10.6667 5 13.5333 2.93333 14.6667 0H13.2C12.1333 2.26667 9.86667 3.66667 7.33333 3.66667Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </button>
    );
};
