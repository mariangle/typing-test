import { redirect } from "next/navigation";

import LoginForm from "./components/LoginForm";
import { getSession } from "@/lib/session";

const LoginPage = async () => {
  const user = await getSession();

  if (user) redirect("/")

    return (
        <div className="min-h-[80vh] grid content-center">          
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h1 className='text-center text-sky-500 dark:text-sky-400 font-semibold'>Typing Test</h1>
            <h2 className='mt-2 text-center text-3xl font-bold tracking-tight head'> Sign In</h2>
          </div>
          <LoginForm />
        </div>
    )
}

export default LoginPage;