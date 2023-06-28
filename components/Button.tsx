"use client"

type Props = {
    children?:  React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, disabled, className} ) => {
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