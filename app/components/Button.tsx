"use client"

interface ButtonProps {
    children?:  React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className} ) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`flex_gap ${className}`}
    >
    {children}
    </button>
  )
}

export default Button