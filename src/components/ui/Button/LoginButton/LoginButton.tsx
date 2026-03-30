'use client';

import * as styles from './LoginButton.css';

type LoginButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};

export function LoginButton({
    onClick,
    disabled = false,
    className,
}: LoginButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`${styles.loginButton} ${className || ''}`}
        >
            ログイン
        </button>
    );
}
