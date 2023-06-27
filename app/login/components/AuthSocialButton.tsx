import { IconType } from "react-icons"

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick
}) => {
  return (
    <button type="button" onClick={onClick} className="inline-flex w-full justify-center rounded-md px-4 py-2 desc shadow-sm ring-1 ring-inset hover:bg-gray-50 focus:outline-offset-0 dark:hover:bg-gray-900 ring-gray-300 dark:ring-slate-700">
        <Icon />
    </button>
  )
}

export default AuthSocialButton