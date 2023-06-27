import LoginForm from "./components/LoginForm";

const LoginPage = () => {
    return (
        <div className='
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h1 className='text-center'>Typing Test</h1>
            <h2 
              className='
                mt-6
                text-center
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
            '> Sign In to your account</h2>
          </div>
          <LoginForm />
        </div>
    )
}

export default LoginPage;