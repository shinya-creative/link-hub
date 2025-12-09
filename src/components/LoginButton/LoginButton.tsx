'use client';

import * as styles from './LoginButton.css';

interface LoginButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export default function LoginButton({
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
