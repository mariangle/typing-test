"use client"

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children?:  React.ReactNode;
    onClick?: () => void
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({type, children, onClick, disabled}) => {
  return (
    <button
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
    {children}
    </button>
  )
}

export default Button