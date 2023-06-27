"use client"

import AuthSocialButton from "./AuthSocialButton";

import { useEffect } from "react"
import { BsGithub, BsGoogle } from "react-icons/bs"
import { toast } from "react-hot-toast"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status === "authenticated"){
            router.push("/")
        }
    }, [session?.status])

    const socialAction = (action: string) => {
        signIn(action, { redirect: false })
        .then((callback) => {
            if (callback?.error) {
                toast.error("Invalid credentials")
            }

            if (callback?.ok && !callback?.error){
                toast.success("Logged in!")
            }
        })
    }
    
  return (
    <div className="mt-8 mx-auto w-full max-w-sm">
        <div className="px-4 py-8 shadow rounded-xl sm:px-10 border dark:border-slate-700">
            <div>
                <div className="flex_gap">
                    <div className="w-full h-[1px] bg-gray-200 dark:bg-slate-700" />
                    <div className="whitespace-nowrap head px-1">Continue with</div>
                    <div className="w-full h-[1px] bg-gray-200 dark:bg-slate-700" />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <AuthSocialButton 
                        icon={BsGithub}
                        onClick={() => socialAction("github")}
                    />
                    <AuthSocialButton 
                        icon={BsGoogle}
                        onClick={() => socialAction("google")}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm